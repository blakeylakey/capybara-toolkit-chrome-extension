chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: "www.amazon.com",
              schemes: ["https", "http"]
            }
          })
        ],
        actions: [
          new chrome.declarativeContent.RequestContentScript({
            js: ["app.js"]
          })
        ]
      }
    ]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.relatedProducts == "asin") {
    fetch(`http://localhost:3001/tools/la/laquery?asin=B007F183LK`)
      .then(results => results.json())
      .then(results => {
        if (results.success) {
          sendResponse(results.results);
        } else {
          sendResponse([]);
        }
      });
    return true; // Will respond asynchronously.
  }
});
