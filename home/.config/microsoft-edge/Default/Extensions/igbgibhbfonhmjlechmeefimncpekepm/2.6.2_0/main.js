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
        console.log('Settings updated from popover');
    });
}

function refresh() {
    /// Sends a message to the content script to refresh the current webpage
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: 'refresh'}, function (response) {
            console.log('Page refreshed');
        });
    });
}

function setHistoryBlocks(obj) {
    const data = JSON.parse(obj);
    console.log('history blocks: ', data);

    chrome.storage.local.set({pce_history_blocks: data}, () => {
        console.log('History blocks updated from content script');
    });
}
