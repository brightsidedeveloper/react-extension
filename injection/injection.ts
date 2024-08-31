type Listeners = {
  [key: string]: ((payload: any) => void)[]
}

const listeners: Listeners = {}

chrome.runtime.onMessage.addListener(
  (request: { event: string; payload: any }, _: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
    const { event, payload } = request
    if (!listeners[event]) {
      return sendResponse('No listener found')
    }
    listeners[event].forEach((listener) => listener(payload))
    sendResponse(`Ran ${listeners[event].length} listener${listeners[event].length === 1 ? '' : 's'}`)
  }
)

function on(event: string, listener: (payload: any) => void) {
  if (!listeners[event]) {
    listeners[event] = []
  }
  listeners[event].push(listener)
}

on('log', (payload) => {
  console.log(payload)
})

console.log('Injection script loaded!')
