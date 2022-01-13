import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, Unsubscribe, User,
} from "firebase/auth";
import { auth } from "./firebase";
import IAuthService from "../auth/IAuthService";

/* eslint-disable max-len */
const FirebaseAuthService = ():IAuthService => {
  const signin = (email:string, password:string):Promise<User> => signInWithEmailAndPassword(auth, email, password)
    .then((response:any) => response.user);

  const signup = (email:string, password:string):Promise<User> => createUserWithEmailAndPassword(auth, email, password)
    .then((response:any) => response.user);

  const signout = () => signOut(auth);

  const authStateChanged = (call:(user:User|null)=>void):Unsubscribe => onAuthStateChanged(auth, (user) => call(user))

  return {
    signin,
    signup,
    signout,
    authStateChanged,
  };
}
export default FirebaseAuthService
