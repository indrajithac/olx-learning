import * as firebase from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLJAvi_QRJ098D8DgUjlohs3xM36aJWmM",
    authDomain: "olx-clone-97ae9.firebaseapp.com",
    projectId: "olx-clone-97ae9",
    storageBucket: "olx-clone-97ae9.appspot.com",
    messagingSenderId: "348073976620",
    appId: "1:348073976620:web:eb5a7570dc91effdf08289",
    measurementId: "G-0P0WR1F3WR"
  };

export default firebase.initializeApp(firebaseConfig)
export const firestore=getFirestore()
export const storage = getStorage();
