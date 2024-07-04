import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6yIIHx76NgQzOKqq4NoYMpVKjZq2_s9E",
  authDomain: "react-netflix-clone-mern.firebaseapp.com",
  projectId: "react-netflix-clone-mern",
  storageBucket: "react-netflix-clone-mern.appspot.com",
  messagingSenderId: "638351455034",
  appId: "1:638351455034:web:e69690f9e93dbb369d9603",
  measurementId: "G-PQJ28NB702"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);