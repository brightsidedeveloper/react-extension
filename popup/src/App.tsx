import { Button } from "./components/ui/shadcn/ui/button";

export default function App() {
    const handleButtonClick = () => {
        const codeToExecute = "console.log('Hello from the popup!');"; // Example code
    
        // Query the active tab and send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0].id) {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { action: "executeCode", code: codeToExecute },
              (response) => {
                console.log("Response from content script:", response.result);
              }
            );
          }
        });
      };

  return <div className="w-[800px] h-[600px]">

    <Button onClick={handleButtonClick}>Log</Button>

  </div>
}
