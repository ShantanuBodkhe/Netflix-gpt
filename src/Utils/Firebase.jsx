// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY1U5XpMsEQQ1FAcK20Nz4zP5q1zwliVM",
  authDomain: "netflix-gpt-sb.firebaseapp.com",
  projectId: "netflix-gpt-sb",
  storageBucket: "netflix-gpt-sb.firebasestorage.app",
  messagingSenderId: "227373467186",
  appId: "1:227373467186:web:c603fe28c01540364bde2b",
  measurementId: "G-9QGLCM3H67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  