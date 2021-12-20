import { ComponentChildren, h, VNode } from "preact";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { useEffect, useState } from "preact/hooks";
import { auth } from "./firebase";
import { IAuthContext, AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: ComponentChildren}):VNode<any> => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const useAuthProvider = ():IAuthContext => {
  const [user, setUser] = useState<User | null>(null);

  const signin = (email:string, password:string) => {
    return signInWithEmailAndPassword(auth,email, password)
      .then((response:any) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signup = (email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response:any) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      });
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
  };
}
