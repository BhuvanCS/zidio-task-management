// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "zidio-taskmanagement.firebaseapp.com",
  projectId: "zidio-taskmanagement",
  storageBucket: "zidio-taskmanagement.firebasestorage.app",
  messagingSenderId: "583497962824",
  appId: "1:583497962824:web:8c17e119f8541bf63e4f7d",
  measurementId: "G-W4E3YMGGQD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

