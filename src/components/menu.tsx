import { Fragment, h } from 'preact';
import { Link } from 'preact-router';
import { useAuth } from '../utils/auth/AuthContext';

const Menu = () => {
  const { user, signout } = useAuth();

  return (
    <header>
      <h1>Preact App</h1>
      <nav>
        <Link href="/">Home </Link>
        {user ? (
          <Fragment>
            <Link href="/profile">Profile </Link>
            <button type="button" onClick={signout}>LogOut</button>
          </Fragment>
        ) : (
          <Fragment>
            <Link href="/registration">Registration </Link>
            <Link href="/login">Login </Link>
          </Fragment>
        )}
      </nav>
    </header>
  )
}

export default Menu;
