// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6h8f2avFYv3XmkV4jJ_P0Nf3Orwo6dAI",
  authDomain: "fir-project-e32fd.firebaseapp.com",
  projectId: "fir-project-e32fd",
  storageBucket: "fir-project-e32fd.firebasestorage.app",
  messagingSenderId: "370022445961",
  appId: "1:370022445961:web:15441b33506c8670c3e758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;