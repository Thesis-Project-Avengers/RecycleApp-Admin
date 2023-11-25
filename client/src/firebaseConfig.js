import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyDIX9agEqxrTUPV7qydY49Ja40WJ3z_SIg",
//   authDomain: "recycle-20fae.firebaseapp.com",
//   projectId: "recycle-20fae",
//   storageBucket: "recycle-20fae.appspot.com",
//   messagingSenderId: "637778408728",
//   appId: "1:637778408728:web:cb36d1547108f4cd659a6d"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCKXjGQCvv58uhAEhCZ6e6A5-6hKpUqYiI",
  authDomain: "recyclev3-6f26a.firebaseapp.com",
  projectId: "recyclev3-6f26a",
  databaseURL: "https://recyclev3-6f26a-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "recyclev3-6f26a.appspot.com",
  messagingSenderId: "472368470135",
  appId: "1:472368470135:web:2c17eaa67817803431ce72"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)  
