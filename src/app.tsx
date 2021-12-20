import { Fragment, h, render } from 'preact';
import Router, { Route } from 'preact-router';
import Menu from './components/menu';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/Registration';
import HomePage from './ts/HomePage';

const Routes = () => (
    <Fragment>
        <Menu />
        <Router>
            <Route path='/' component={HomePage} />
            <Route path='registration' component={RegistrationPage} />
            <Route path='login' component={LoginPage} />
        </Router>
    </Fragment>
)


render((<Routes />), document.body);
