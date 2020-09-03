import { auth } from "./firebase"; //importing the previously instatiated object from the firebase.js config file

//## below the authentication functions ##

//sign up
export const register = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//sign in
export const login = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//sign out
export const doSignOut = () => auth.signOut();

//## below are two more functions, for resetting or changing passwords ##

//password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordChange = (password) =>
  auth.currentUser.updatePassword(password);
