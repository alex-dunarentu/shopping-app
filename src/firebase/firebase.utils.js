import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6Fe8KbmMdVKteUwCfAIDxEeQO8JmaRaI",
  authDomain: "shopping-app-2778f.firebaseapp.com",
  databaseURL: "https://shopping-app-2778f.firebaseio.com",
  projectId: "shopping-app-2778f",
  storageBucket: "shopping-app-2778f.appspot.com",
  messagingSenderId: "20692178390",
  appId: "1:20692178390:web:352dbfff3670b1f9bcc077",
  measurementId: "G-WDGF5GR1X2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
