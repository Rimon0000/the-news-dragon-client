// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluh7iHKfQDd2Zv7hLU1yxTAjvLgRJO14",
  authDomain: "the-news-dragon-client-a6189.firebaseapp.com",
  projectId: "the-news-dragon-client-a6189",
  storageBucket: "the-news-dragon-client-a6189.appspot.com",
  messagingSenderId: "944178976450",
  appId: "1:944178976450:web:1c9b6417da4fadc7ab8d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 