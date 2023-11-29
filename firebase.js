// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj519f2sej7eEwlls9DfVNe2Ay_NTkam0",
  authDomain: "instagrm-clone-plate.firebaseapp.com",
  projectId: "instagrm-clone-plate",
  storageBucket: "instagrm-clone-plate.appspot.com",
  messagingSenderId: "549496149739",
  appId: "1:549496149739:web:9a5cece4eb194931e850ae",
  measurementId: "G-HJ5QRWQ8NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
