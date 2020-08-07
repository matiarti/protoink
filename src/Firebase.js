import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAb9-BwhqZxDaql_ZchaJE6dowyqIsARYw",
  authDomain: "proto-ink.firebaseapp.com",
  databaseURL: "https://proto-ink.firebaseio.com",
  storageBucket: "proto-ink.appspot.com",
  projectId: "proto-ink",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
