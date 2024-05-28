// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCalWIi6fYlLSu2QLlNqpmYg2MVykLeS5k",
  authDomain: "book-store-6aafd.firebaseapp.com",
  projectId: "book-store-6aafd",
  storageBucket: "book-store-6aafd.appspot.com",
  messagingSenderId: "475116394781",
  appId: "1:475116394781:web:aa0eb96ef250920a9429f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
