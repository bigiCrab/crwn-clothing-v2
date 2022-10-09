// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59TVpBfbJJybPY9rMGGzob6hWRg6U_GA",
  authDomain: "crwn-clothing-db-b4d5d.firebaseapp.com",
  projectId: "crwn-clothing-db-b4d5d",
  storageBucket: "crwn-clothing-db-b4d5d.appspot.com",
  messagingSenderId: "790526940905",
  appId: "1:790526940905:web:de3576b7cbb66efaa90278",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(fireBaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(
    "🚀 ~ file: firebase.utils.js ~ line 56 ~ userDocRef",
    userDocRef
  );
  const userSnapshot = await getDoc(userDocRef);
  console.log(
    "🚀 ~ file: firebase.utils.js ~ line 57 ~ userSnapshot",
    userSnapshot
  );
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error create user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const getUserByEmailAndPassword = async (email, password) => {
  console.log("🚀 ~ file: firebase.utils.js ~ line 89 ~ getUserByEmailAndPassword ~ email", email)
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    console.log("🚀 ~ file: firebase.utils.js ~ line 93 ~ .then ~ user", user);
    return user;
    // ...
  } catch (error) {
    const errorCode = error.code;
    console.log(
      "🚀 ~ file: firebase.utils.js ~ line 101 ~ signInWithEmailAndPassword ~ errorCode",
      errorCode
    );
    const errorMessage = error.message;
    console.log(
      "🚀 ~ file: firebase.utils.js ~ line 103 ~ signInWithEmailAndPassword ~ errorMessage",
      errorMessage
    );
  }
};
