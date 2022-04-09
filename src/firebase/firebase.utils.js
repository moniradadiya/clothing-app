import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARGJhz06qYUFHa3FaAbPZC-NOr0nVr56c",
  authDomain: "clothing-app-4a8b5.firebaseapp.com",
  projectId: "clothing-app-4a8b5",
  storageBucket: "clothing-app-4a8b5.appspot.com",
  messagingSenderId: "490177229260",
  appId: "1:490177229260:web:9f097319b1839bd4daed69",
  measurementId: "G-LKC9JRQW5W"
};

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();  

  provider.setCustomParameters({ prompt: 'select_account' }); 


  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
   

  export default firebase;


  