import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZoSGSJicaK9CuthGIv0K5n17bOr9LKmM",
  authDomain: "the-farm-223df.firebaseapp.com",
  databaseURL: "https://the-farm-223df.firebaseio.com",
  projectId: "the-farm-223df",
  storageBucket: "the-farm-223df.appspot.com",
  messagingSenderId: "1061647793143",
  appId: "1:1061647793143:web:2c9954d308f5dec9ca4cf2",
  measurementId: "G-YS39S0BE7R"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
console.log('test firebaseApp: ', firebaseApp)
console.log('test signInWithRedirect: ', signInWithRedirect)

// init provider
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const sign_in_with_popup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

// storing into firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('userDocRef :=>', userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log('userSnapshot:: ', userSnapshot)
  console.log('userSnapshot:: ', userSnapshot.exist)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}