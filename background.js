chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostContains: 'youtube.com' },
            }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
        },
      ]);
    });
  });
  
  chrome.runtime.onMessage.addListener((message) => {
    const serverURL = 'http://localhost:4000/download?';
    const query = new URLSearchParams(message).toString();
    const downloadURL = serverURL + query;
  
    chrome.downloads.download({
      url: downloadURL,
      filename: `${message.filename}.${message.format}`,
    });
  });
  