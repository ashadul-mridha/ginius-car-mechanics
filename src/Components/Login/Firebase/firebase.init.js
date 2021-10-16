
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthFirebase;