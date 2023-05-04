import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

//! Firebase Change Auth
const ChangeAuth = (setUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
};

//! Firebase Register
const Register = async (registerEmail, registerPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

//! Firebase Login
const Login = async (loginEmail, loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

//! Firebase Signout
const Signout = async () => {
  await signOut(auth);
};

export { ChangeAuth, Register, Login, Signout };
