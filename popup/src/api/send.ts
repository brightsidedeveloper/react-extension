export default function send(event: string, payload: unknown) {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        const t = setTimeout(() => reject('No response from tab'), 5000)
        chrome.tabs.sendMessage(tabs[0].id, { event, payload }, (res) => {
          clearTimeout(t)
          resolve(res)
        })
      } else reject('No tab found')
    })
  })
}
