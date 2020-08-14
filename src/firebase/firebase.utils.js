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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
