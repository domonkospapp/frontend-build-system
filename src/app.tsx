import { h, render } from 'preact';
import Router, { Route } from 'preact-router';
import RegistrationPage from './pages/auth/Registration';
import HomePage from './ts/HomePage';

const Routes = () => (
    <Router>
        <Route path='/' component={HomePage} />
        <Route path='registration' component={RegistrationPage} />
    </Router>
)


render((<Routes />), document.body);
