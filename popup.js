let SUBMIT = document.getElementById('submit');

SUBMIT.addEventListener('click', () => {
    chrome.runtime.sendMessage('Hello');
})