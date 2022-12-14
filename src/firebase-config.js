// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC9ZqCTV--p2ufh10eu0WBK9EdvWIJcp3M",

  authDomain: "alkunoteapp-28d7f.firebaseapp.com",

  projectId: "alkunoteapp-28d7f",

  storageBucket: "alkunoteapp-28d7f.appspot.com",

  messagingSenderId: "548156273217",

  appId: "1:548156273217:web:0b9453b26cee754a594cc0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
