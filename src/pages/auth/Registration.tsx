import { Fragment, h } from 'preact';
import { useRef} from "preact/hooks";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase"
import { FormEvent } from 'react';

const RegistrationPage = ():JSX.Element => {

    const email = useRef<HTMLInputElement>(null!);
    const password = useRef<HTMLInputElement>(null!);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
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