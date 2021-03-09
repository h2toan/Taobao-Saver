(function injectInternalScript() {
    let script = document.createElement("script");
    switch (location.hostname) {
        case 'item.taobao.com':
            script.src = chrome.runtime.getURL('taobao.js');
            return document.getElementsByTagName("head")[0].appendChild(script);
        case 'detail.tmall.com':
            script.src = chrome.runtime.getURL('tmall.js');
            return document.getElementsByTagName("head")[0].appendChild(script);
        default:
            break;
    }
})()