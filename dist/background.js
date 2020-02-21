chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostEquals: 'www.amazon.com',
          schemes: ['https', 'http']
        }
      })],
      actions: [
        new chrome.declarativeContent.RequestContentScript({
          js: ['app.js']
        })
      ]
    }]);
  });
});