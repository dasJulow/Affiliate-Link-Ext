
import {auth} from  './index';

chrome.runtime.onInstalled.addListener(() => {
  chrome.identity.getAuthToken({interactive: true}, function(token) {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
      return;
    }
    // Use the token to sign in with Firebase
    const credential = auth.GoogleAuthProvider.credential(null, token);
    auth.signInWithCredential(credential)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user.displayName);
      })
      .catch((error) => {
        console.log('Error signing in:', error);
      });
  });
});


chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url === "https://www.amazon.com/") {
        chrome.storage.local.get('redirectUrl', function(result) {
            chrome.tabs.update(details.tabId, {url: result.redirectUrl});
        });
    }
        
        
    
    //chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/"});
    
}, {url: [{urlMatches : 'https://www.amazon.com/'}]});


