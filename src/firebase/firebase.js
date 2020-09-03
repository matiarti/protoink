import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAb9-BwhqZxDaql_ZchaJE6dowyqIsARYw",
  authDomain: "proto-ink.firebaseapp.com",
  databaseURL: "https://proto-ink.firebaseio.com",
  storageBucket: "proto-ink.appspot.com",
  projectId: "proto-ink",
  messagingSenderId: "42413151833",
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
