import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


//import {getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyAzUeU1l9kfi_cmo02t1BRM8waNw8xMQcE",
    authDomain: "affiliatelinksext.firebaseapp.com",
    projectId: "affiliatelinksext",
    storageBucket: "affiliatelinksext.appspot.com",
    messagingSenderId: "679100910256",
    appId: "1:679100910256:web:63945f1ec2c9449635c975"
  }); 

  const app = initializeApp(firebaseApp);

  const auth = getAuth(app)
 // const db = getFirestore(firebaseApp)

  // auth state detection
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('User logged in');
    } else {
      console.log('No user');
    }
  });

