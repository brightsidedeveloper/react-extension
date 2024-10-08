"use strict";
const listeners = {};
chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    const { event, payload } = request;
    if (!listeners[event]) {
        return sendResponse('No listener found');
    }
    listeners[event].forEach((listener) => listener(payload));
    sendResponse(`Ran ${listeners[event].length} listener${listeners[event].length === 1 ? '' : 's'}`);
});
function on(event, listener) {
    if (!listeners[event]) {
        listeners[event] = [];
    }
    listeners[event].push(listener);
}
on('log', (payload) => {
    console.log(payload);
});
console.log('Injection script loaded!');
