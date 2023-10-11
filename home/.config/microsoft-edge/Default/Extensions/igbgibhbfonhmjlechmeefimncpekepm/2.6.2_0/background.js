import './interop/save_interop.dart.js'

// ---------------------------------------------------------------------------------------------------------------------
// Chrome API interaction
// ---------------------------------------------------------------------------------------------------------------------

// On install or update of a major/minor version, open the corresponding page in a new tab.
chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === 'install') {
        chrome.tabs.create({url: 'https://code.pieces.app/onboarding/chrome/welcome'}, () => {
        });
    } else if (object.reason === 'update') {
        const manifestData = chrome.runtime.getManifest();
        const version = manifestData.version.split('.');

        chrome.storage.sync.get("pce_version", (res) => {
            if (res.pce_version !== null && res.pce_version !== undefined) {
                const oldVersion = res.pce_version.split('.');
                if (oldVersion[0] !== version[0] || oldVersion[1] !== version[1]) {
                    chrome.tabs.create({url: 'https://code.pieces.app/updates'}, () => {
                    });
                }
            }

            chrome.storage.sync.set({pce_version: chrome.runtime.getManifest().version}, () => {
            });
        });
    }
});

// Create the right-click context menu.
chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: 'main_pieces_context_menu',
        title: 'Save Selection to Pieces [cmd+shift+s]',
        contexts: ['selection']
    });
});

// If platform is windows, change the context menu text.
chrome.runtime.getPlatformInfo((info) => {
    if (info.os === 'win') {
        chrome.contextMenus.update('main_pieces_context_menu', {title: 'Pieces: Save Selection [Alt+Shift+S]'});
    }
});

// Event listener for the context menu to save a snippet.
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === 'main_pieces_context_menu' && tab.id) {
        chrome.tabs.sendMessage(tab.id, {message: 'savePieceShallow'}, async function (response) {
            if (info.selectionText !== null && info.selectionText) {
                if ((await health()).ok) {
                    const application = await connect();
                    application.json().then(data => {
                            let appData = JSON.stringify(data);
                            saveSnippet( // From save_interop.dart.js
                                response.selection,
                                info.pageUrl,
                                response.userPlatform,
                                appData,
                                'contextMenuClick');
                        }
                    )
                }
            }
        });
    }
});

/// This chunk here is going to do a few things:
/// (1) Listen to changes in the active tab
/// (2) When the tab changes, we're going to send a message to the tab to retrieve the current url & host
/// (3) Once we get the url & host of the active tab, we're going to fetch our settings
/// (4) Lastly, we update the settings with the new url & host
///
/// The purpose of this is so that when a user goes between tabs, then opens the popover, the popover
/// state will be the most up-to-date for the current URL, specifically related to blacklisting.
/// Otherwise, it would be the state of the last page rendered/refreshed.
chrome.tabs.onActivated.addListener(function (info) {
    /// Sends a message to the content script to receive the current URL
    chrome.tabs.sendMessage(info.tabId, {message: "getLocation"}, function (response) {
        /// Gets the current storage and updates the url that's stored
        chrome.storage.sync.get(['pce_settings'], function (stored) {

            const formed = {
                placement: stored['pce_settings']['placement'],
                theme: stored['pce_settings']['theme'],
                mainBtn: stored['pce_settings']['mainBtn'],
                telemetry: stored['pce_settings']['telemetry'],
                minChars: stored['pce_settings']['minChars'],
                backtrackLimit: stored['pce_settings']['backtrackLimit'],
                blacklist: stored['pce_settings']['blacklist'],
                whitelist: stored['pce_settings']['whitelist'],
                enabled: stored['pce_settings']['enabled'],
                url: response.url,
                host: response.host,
            };

            // console.log('Settings: ', formed);

            /// Updates the settings with the current URL
            chrome.storage.sync.set({pce_settings: formed}, () => {
                // console.log('Settings updated with new URL!');
            });

            /// Hate to do this inside of the settings getter, but we will also need the
            /// most up-to-date backtrack settings to update our backtracked list here
            chrome.storage.local.get(['pce_backtrack_sites'], function (backtracked) {
                /// Gets the backtracked list and filters out the current site if it exists
                let list = backtracked['pce_backtrack_sites'].filter(function (value) {
                    return value !== response.url;
                });

                /// If the length of our site is equal to our limit, we'll remove the oldest item
                if (list.length === formed.backtrackLimit) {
                    /// Removes the oldest site from the backtrack history
                    list.pop();
                }

                /// Adds the most recent host to the first index in the list
                list.unshift(response.url);

                /// Updates the backtracked sites
                chrome.storage.sync.set({pce_backtrack_sites: list}, () => {
                    // console.log('Backtrack list updated from background script');
                });
            });
        });
    });

    // This will re-run the content.dart script on a tab change
    // TODO: I can likely improve the performance of this by isolating some stuff into
    // separate scripts
    chrome.scripting.executeScript({
        target: {tabId: info.tabId},
        files: ['content.dart.js'],
    });
});

// Event listener for the keyboard shortcut
chrome.commands.onCommand.addListener((command) => {
    if (command === 'savePiece') {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: command}, async function (response) {
                const selection = response.selection;
                if (selection !== null && selection.length > 0) {
                    if ((await health()).ok) {
                        const application = await connect();
                        application.json().then(data => {
                                let appData = JSON.stringify(data);
                                saveSnippet( // From save_interop.dart.js
                                    selection,
                                    response.websiteHref,
                                    response.userPlatform,
                                    appData,
                                    'keyboardShortcut');
                            }
                        )
                    }
                }
            });
        });
    }
});

// ---------------------------------------------------------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------------------------------------------------------

// JS version of the health check
function health() {
    return fetch("http://localhost:1000/.well-known/health", {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    })
}

// JS version of application initialization
function connect() {
    return fetch("http://localhost:1000/connect", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": "{ \"application\": { \"name\": \"GOOGLE_CHROME_EXTENSION_MV3\", \"version\": \"2.2.0\", \"platform\": \"WEB\" } }"
    })
}


// ---------------------------------------------------------------------------------------------------------------------
// Experiments
// ---------------------------------------------------------------------------------------------------------------------

// TODO: Get link is a bit too much for first release. take another look after the initial release
// chrome.contextMenus.create({
//     id: 'copy_and_save',
//     parentId: 'main_pieces',
//     title: 'Copy and Save',
//     contexts: ['selection']
// });
//
// chrome.contextMenus.create({
//     id: 'get_link',
//     parentId: 'main_pieces',
//     title: 'Get Link',
//     contexts: ['selection']
// });

// chrome.tabs.onActivated.addListener(function(request, sender, sendResponse) {
//     console.log(sendResponse);
//     if (true) {
//         chrome.action.setIcon({path: 'images/icons/icon48.png'});
//     } else {
//         chrome.action.setIcon({path: 'images/icons/grey_logo.png'});
//     }
// });

// If we need to add a dart version of a background script, we can do it below
// try {
//     importScripts('background.dart.js');
// } catch(e) {
//     console.error(e);
// }
