// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABKPgfmhbvZRwSu1O-W7_kHJenelpGH60",
  authDomain: "crwn-clothing-db-e24dd.firebaseapp.com",
  projectId: "crwn-clothing-db-e24dd",
  storageBucket: "crwn-clothing-db-e24dd.appspot.com",
  messagingSenderId: "272371013474",
  appId: "1:272371013474:web:2d353c2cd7aeab8873fe3b",
  measurementId: "G-F9QD1QNSSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
