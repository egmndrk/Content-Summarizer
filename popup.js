document.getElementById('summarize').addEventListener('click', () => {
    const summaryElement = document.getElementById('summary');
    summaryElement.textContent = 'Summarizing...';
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: "summarize"}, (response) => {
        if (response && response.summary) {
          summaryElement.textContent = response.summary;
        } else {
          summaryElement.textContent = 'Error generating summary. Please try again.';
        }
      });
    });
  });