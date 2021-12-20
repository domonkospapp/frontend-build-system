import { Fragment, h } from 'preact';
import { useRef} from "preact/hooks";
import { FormEvent } from 'react';
import { useAuth } from '../../utils/AuthContext';

const RegistrationPage = ():JSX.Element => {

    const email = useRef<HTMLInputElement>(null!);
    const password = useRef<HTMLInputElement>(null!);
    const { user, signup } = useAuth();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signup(email.current.value, password.current.value)
            .then(resetForm)
            .catch(onRegistrationError);
    };


    const resetForm = () => {
        email.current.value = "";
        password.current.value = "";
    }

    const onRegistrationError = (error:Error) => console.log(error.message);

    return (
        <Fragment>
            <h2>Registration</h2>
            <form onSubmit={onSubmit}>
                Email: <input type="text" ref={email} /><br />
                Password: <input type="password" ref={password} /><br />
                <input type="submit" value="Submit" />
            </form>
        </Fragment>
	)
};

export default RegistrationPage;