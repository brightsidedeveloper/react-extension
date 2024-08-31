"use strict";
// example.ts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'executeCode') {
        const result = eval(request.code); // Example: Executing the code from the popup
        sendResponse({ result: result });
    }
});
