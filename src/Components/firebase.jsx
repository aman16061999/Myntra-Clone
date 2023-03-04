// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database"
import firebase from "firebase/app"
import {getDatabase, ref,set} from "firebase/database"
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app"

import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0SuWXU64SItP0OJ0c3C7v7NYM7JDGhLY",
  authDomain: "myntraclone-2e5c5.firebaseapp.com",
  projectId: "myntraclone-2e5c5",
  storageBucket: "myntraclone-2e5c5.appspot.com",
  messagingSenderId: "95710625666",
  appId: "1:95710625666:web:e9c317b0b7973c1fd3d99b",
  measurementId: "G-5KEZTLLB2T"
};

// Initialize Firebase
// const fireDb=firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth()
const provider=new GoogleAuthProvider();



export { app , auth , provider};
// export default fireDb.database().ref();





