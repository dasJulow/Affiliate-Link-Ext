
import {auth} from  './src/index';


//event listener to check to sing-in users with chorme.identity

chrome.runtime.onClicked.addListener(() =>{
  chrome.identity.getAuthToken({ interactive: true }, async function (token) {
    if (chrome.runtime.lastError) {
      console.log("We are sorry an error occured!")
      console.error()
      
    } else {
      // Authenticate with Firebase using the token
      const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      await firebase.auth().signInWithCredential(credential);

      console.log("User signed in")
    }
  }); 
  
})







chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url === "https://www.amazon.com/") {
        chrome.storage.local.get('redirectUrl', function(result) {
            chrome.tabs.update(details.tabId, {url: result.redirectUrl});
        });
    }
        
        
    
    //chrome.tabs.update(details.tabId, {url: "https://www.youtube.com/"});
    
}, {url: [{urlMatches : 'https://www.amazon.com/'}]});


