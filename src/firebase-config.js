// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
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

//custom hook to get the current user

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return currentUser;
}

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
