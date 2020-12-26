import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOWrHJTgQYeFc7wQMvRhAs99EB2zPstLQ",
  authDomain: "react-ecommerce-86b21.firebaseapp.com",
  projectId: "react-ecommerce-86b21",
  storageBucket: "react-ecommerce-86b21.appspot.com",
  messagingSenderId: "1037314022189",
  appId: "1:1037314022189:web:b010467c6dd68ba319d1a4",
  measurementId: "G-WCKKN6Y6S4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
 
export  const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;