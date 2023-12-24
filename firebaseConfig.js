// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEo0zvOhZq3nYkyLGLQbLCVoi7nnBe08s",
  authDomain: "platform-447aa.firebaseapp.com",
  projectId: "platform-447aa",
  storageBucket: "platform-447aa.appspot.com",
  messagingSenderId: "697284712795",
  appId: "1:697284712795:web:cb06c5b3bd5e4e2ca3227e",
  measurementId: "G-4PX2GJEQ68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };