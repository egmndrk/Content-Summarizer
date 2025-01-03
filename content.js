chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "summarize") {
      const content = document.body.innerText;
      chrome.runtime.sendMessage({action: "getSummary", content: content}, (response) => {
        sendResponse({summary: response.summary});
      });
      return true;  // Indicates we will send a response asynchronously
    }
  });