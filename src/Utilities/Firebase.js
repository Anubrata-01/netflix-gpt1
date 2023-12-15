// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXArGb2yGP5IqIqXxS7zEkBSEaOP-lgds",
  authDomain: "netflix-gpt-bec0d.firebaseapp.com",
  projectId: "netflix-gpt-bec0d",
  storageBucket: "netflix-gpt-bec0d.appspot.com",
  messagingSenderId: "529228562833",
  appId: "1:529228562833:web:47bd91115c6f59d8be1a30",
  measurementId: "G-L9XECKW4YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();