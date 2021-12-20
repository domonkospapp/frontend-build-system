import { Fragment, h } from 'preact';
import { useRef} from "preact/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase"
import { FormEvent } from "react";
import { useAuth } from '../../utils/AuthContext';

const LoginPage = ():JSX.Element => {
    const email = useRef<HTMLInputElement>(null!);
    const password = useRef<HTMLInputElement>(null!);
    const { user, signin } = useAuth();



    const handleRegistration = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signin(email.current.value, password.current.value)
            .then(resetForm)
            .catch(onLoginError);
    };

    const resetForm = ()=> {
        email.current.value = "";
        password.current.value = "";
    }

    const onLoginError = (error:Error) => console.log(error.message);

    const handleSignOut = () => signOut(auth);

    return (
        <Fragment>
            <h2>Login</h2>
            
            <form onSubmit={handleRegistration}>
                Email: <input type="text" ref={email} /><br />
                Password: <input type="password" ref={password} /><br />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handleSignOut}>LogOut</button>
        </Fragment>
	)
};

export default LoginPage;