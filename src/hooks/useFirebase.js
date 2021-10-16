
import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged } from "firebase/auth";
// import initializeAuthFirebase from "../Components/Login/Firebase/firebase.init";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlycjuPKyfkT-TAdJ9-OeB_QCYtlRKvE",
  authDomain: "g-car-mechanics.firebaseapp.com",
  projectId: "g-car-mechanics",
  storageBucket: "g-car-mechanics.appspot.com",
  messagingSenderId: "1090928128174",
  appId: "1:1090928128174:web:0ca2d96c1e4bc62347fd3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

// initializeAuthFirebase();


const useFirebase = () => {

    const [user , setUser] = useState({});
    const [isLogin , setIsLogin] = useState(true);

    const signInUsingGoogle = () => {

        setIsLogin(true);

       return signInWithPopup(auth , GoogleProvider);
        
    }

    useEffect( () => {
        onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
            setIsLogin(false);
        })
    } , [])

    const logOut = () => {

        setIsLogin(true);

        signOut(auth)
        .then( () => {
            setUser({});
            console.log('Log Out SuccessFull');
        })
        .finally( () => {
            setIsLogin(false);
        });

        
        
    }

    return {
        user,
        setUser,
        isLogin,
        setIsLogin,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;