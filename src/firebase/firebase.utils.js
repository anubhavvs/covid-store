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
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

