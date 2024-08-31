// example.ts

chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  if (request.action === 'executeCode') {
    const result = eval(request.code) // Example: Executing the code from the popup
    sendResponse({ result: result })
  }
})
