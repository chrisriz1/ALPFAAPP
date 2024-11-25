import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, GoogleAuthProvider } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCs5APf2xeUHYXRq6-X1G0TdV3mm-P80no",
  authDomain: "alpfa-app-414e7.firebaseapp.com",
  projectId: "alpfa-app-414e7",
  storageBucket: "alpfa-app-414e7.appspot.com",
  messagingSenderId: "719139390138",
  appId: "1:719139390138:web:f5f0890d301fd89f4db883",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Use AsyncStorage for Auth persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Set up Google Auth provider
const provider = new GoogleAuthProvider();

export { app, auth, provider };
