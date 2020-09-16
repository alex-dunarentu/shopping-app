import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDH4l97fJCvMVGn5SLwLHPosh4HmCNCBqQ",
  authDomain: "shop-a-c7cac.firebaseapp.com",
  databaseURL: "https://shop-a-c7cac.firebaseio.com",
  projectId: "shop-a-c7cac",
  storageBucket: "shop-a-c7cac.appspot.com",
  messagingSenderId: "1049536219588",
  appId: "1:1049536219588:web:f266a485aa3604bb007c91",
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
