import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeVtV4IWpDo4-ojpChkOhzlgnoG0UrcrA",
    authDomain: "clothing-store-db-f7ee9.firebaseapp.com",
    databaseURL: "https://clothing-store-db-f7ee9.firebaseio.com",
    projectId: "clothing-store-db-f7ee9",
    storageBucket: "clothing-store-db-f7ee9.appspot.com",
    messagingSenderId: "44493867360",
    appId: "1:44493867360:web:a1974e59e4511184dd7605",
    measurementId: "G-29VFQ0JT3F"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;