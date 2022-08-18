// Watch current active user tab (recent change) to verify if it is for a YouTube video
chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  if (tab && tab.url.includes("youtube.com/watch")) {
    const [, queryParameters] = tab.url.split("?");
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});
