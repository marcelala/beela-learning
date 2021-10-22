//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
//project files
import { FIREBASE_CONFIG } from "../firebase.env";

const firebaseInstance = initializeApp(FIREBASE_CONFIG);
export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const storageInstance = getStorage(firebaseInstance);
export const analytics = getAnalytics(firebaseInstance);
