import { User } from "firebase/auth";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

interface IAuthContext {
    user: User|null;
    signin(email:string, password:string):Promise<any>;
    signup(email:string, password:string):Promise<any>;
    signout: () => void;
}

const useAuth = () => useContext(AuthContext);

const AuthContext = createContext<IAuthContext>(null!);

export {
  IAuthContext,
  AuthContext,
  useAuth,
}
