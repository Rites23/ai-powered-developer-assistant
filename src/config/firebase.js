import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyClmIBKJPK2SyBWZ9KgfvQQNVwyNrGOSZU",
  authDomain: "ai-powered-developer-assistant.firebaseapp.com",
  projectId: "ai-powered-developer-assistant",
  storageBucket: "ai-powered-developer-assistant.firebasestorage.app",
  messagingSenderId: "776797634433",
  appId: "1:776797634433:web:74a832a4758bc8fb183280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// Set persistence correctly using imported functions
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Auth persistence error:", error);
});
