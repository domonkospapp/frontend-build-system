import { Fragment, h } from 'preact';
import { useRef} from "preact/hooks";
import { useAuth } from '../../utils/AuthContext';

const RegistrationPage = ():h.JSX.Element => {
  const email = useRef<HTMLInputElement>(null!);
  const password = useRef<HTMLInputElement>(null!);
  const { signup } = useAuth();

  const onSubmit = (event: any) => {
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
        Email:
        {' '}
        <input type="text" ref={email} />
        <br />
        Password:
        {' '}
        <input type="password" ref={password} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Fragment>
  )
};

export default RegistrationPage;
