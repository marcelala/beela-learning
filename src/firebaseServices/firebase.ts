//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import { FIREBASE_CONFIG } from "../firebase_enviroment";

const firebaseInstance = initializeApp(FIREBASE_CONFIG);
export const fireStoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
export const storageInstance = getStorage(firebaseInstance);
export const analytics = getAnalytics(firebaseInstance);
