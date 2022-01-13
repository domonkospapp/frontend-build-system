/* eslint-disable max-len */
import { User } from "firebase/auth";
import { useEffect, useState } from "preact/hooks";
import { IAuthContext } from "./AuthContext";
import IAuthService from "./IAuthService";

const useFirebaseAuthProvider = (authService:IAuthService):IAuthContext => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (email:string, password:string) => authService.signin(email, password)
    .then((user:User) => {
      setUser(user);
      return user;
    });

  const signup = (email:string, password:string) => authService.signup(email, password)
    .then((user:User) => {
      setUser(user);
      return user;
    });

  const signout = () => authService.signout()
    .then(() => {
      setUser(null);
    });

  useEffect(() => {
    const unsubscribe = authService.authStateChanged((user:User|null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [])

  return {
    user,
    signin,
    signup,
    signout,
  };
}
export default useFirebaseAuthProvider
