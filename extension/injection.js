'use strict'
// example.ts
console.log('Hello from the injected script!')
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'executeCode') {
    const result = eval(request.code) // Example: Executing the code from the popup
    sendResponse({ result: result })
  }
})
