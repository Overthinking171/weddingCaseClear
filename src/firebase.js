// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzukaqKU8BOvDgvZYHK87Zi9n7u9Gd_t4",
  authDomain: "wedding-project-c258d.firebaseapp.com",
  projectId: "wedding-project-c258d",
  storageBucket: "wedding-project-c258d.appspot.com",
  messagingSenderId: "546541986821",
  appId: "1:546541986821:web:36cb9c4c1342a83316a86c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);