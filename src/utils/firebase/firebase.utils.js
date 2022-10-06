// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59TVpBfbJJybPY9rMGGzob6hWRg6U_GA",
  authDomain: "crwn-clothing-db-b4d5d.firebaseapp.com",
  projectId: "crwn-clothing-db-b4d5d",
  storageBucket: "crwn-clothing-db-b4d5d.appspot.com",
  messagingSenderId: "790526940905",
  appId: "1:790526940905:web:de3576b7cbb66efaa90278"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
