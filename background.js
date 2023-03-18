chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url === "https://www.amazon.com/") {
        chrome.storage.local.get('redirectUrl', function(result) {
            chrome.tabs.update(details.tabId, {url: result.redirectUrl});
        });
    }
        
        
    
    //chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/"});
    
}, {url: [{urlMatches : 'https://www.amazon.com/'}]});
