import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo5-_I4Ugz3KPP4__UUAxWXG0aqmBPCDc",
  authDomain: "travelkart-39452.firebaseapp.com",
  projectId: "travelkart-39452",
  storageBucket: "travelkart-39452.firebasestorage.app",
  messagingSenderId: "998166449503",
  appId: "1:998166449503:web:8a19f6c4d2c98211e17aea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;