(function injectInternalScript() {
    switch (location.hostname) {
        case 'item.taobao.com':
            getScript(chrome.runtime.getURL('taobao.js'));
            getCSS(chrome.runtime.getURL('ui.css'));
            return
        case 'detail.tmall.com':
            getScript(chrome.runtime.getURL('tmall.js'));
            getCSS(chrome.runtime.getURL('ui.css'));
            return
        default:
            break;
    }
})()

function getScript(src) {
    let script = document.createElement("script");
    script.src = src;
    return document.getElementsByTagName("head")[0].appendChild(script);
}

function getCSS(href) {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = href;
    return document.getElementsByTagName("head")[0].appendChild(css);
}