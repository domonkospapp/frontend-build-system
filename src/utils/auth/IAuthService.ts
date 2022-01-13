import { User } from "firebase/auth";

interface IAuthService {
    signin: (email:string, password:string) => Promise<User>
    signup: (email:string, password:string) => Promise<User>
    signout: () => Promise<void>;
    authStateChanged: (call:(user:User|null)=>void) => () => void
}
export default IAuthService
