import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
        "AIzaSyDHsIbQWNDcb4AYCH6BvJBrF_Hd-yqnESQ",
    authDomain:
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
        "administration-portfolio.firebaseapp.com",
    projectId:
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
        "administration-portfolio",
    storageBucket:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
        "administration-portfolio.firebasestorage.app",
    messagingSenderId:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "610598652192",
    appId:
        process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
        "1:610598652192:web:d575d18c83696a91842f45",
    measurementId:
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-XGF69LKQ5Y",
};

// Initialize Firebase
const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
// const messaging = getMessaging(app);

export { db };
