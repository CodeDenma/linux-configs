chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "savePiece") {
            const selection = window.getSelection().toString();
            const websiteHref = window.location.href;
            const platform = window.navigator.userAgent;
            sendResponse({
                selection: selection,
                websiteHref: websiteHref,
                userPlatform: platform
            });
        }

        if (request.message === 'savePieceShallow') {
            const selection = window.getSelection().toString();
            const platform = window.navigator.userAgent;
            sendResponse({
                selection: selection,
                userPlatform: platform
            })
        }

        /// Used to refresh the content on the page from the popover
        if (request.message === 'refresh') {
            window.location.reload();
            sendResponse({message: 'RELOADED!'});
        }

        /// Used to update the url & host in settings when clicking between tabs
        if (request.message === 'getLocation') {
            let url = '';
            let host = '';

            /// Checks to make sure we actually have values
            if (typeof (window.location.href) !== 'undefined') {
                url = window.location.href;
            }

            if (typeof (window.location.host) !== 'undefined') {
                host = window.location.host;
            }

            /// Will return empty strings if not.
            /// This is usually the case when opening a new tab
            sendResponse({url: url, host: host});
        }
    }
);

// Called exclusively via dart code
function setBacktrackList(obj) {
    const data = JSON.parse(obj);
    // console.log('backtrack list: ', data);

    chrome.storage.local.set({pce_backtrack_sites: data}, () => {
        // console.log('Backtrack list saved from content script');
    });
}

function setCurrentBlocks(obj) {
    const data = JSON.parse(obj);
    // console.log('current blocks: ', data);

    chrome.storage.local.set({pce_current_blocks: data}, () => {
        // console.log('Current blocks updated from content script');
    });
}

function setHistoryBlocks(obj) {
    const data = JSON.parse(obj);
    // console.log('history blocks: ', data);

    chrome.storage.local.set({pce_history_blocks: data}, () => {
        // console.log('History blocks updated from content script');
    });
}

function setPiecesSettingsInterop(placement, theme, mainBtn, telemetry, minChars, backtrackLimit, blacklist, url, host, enabled, whitelist) {
    const formed = {
        placement: placement,
        theme: theme,
        mainBtn: mainBtn,
        telemetry: telemetry,
        minChars: minChars,
        backtrackLimit: backtrackLimit,
        blacklist: blacklist,
        url: url,
        host: host,
        enabled: enabled,
        whitelist: whitelist,
    };

    console.log('Settings: ', formed);

    chrome.storage.sync.set({pce_settings: formed}, () => {
        console.log('Settings updated from content script');
    });
}


