import { h, render } from 'preact';
import Router, { Route } from 'preact-router';
import Menu from './components/menu';
import LoginPage from './pages/auth/LoginPage';
import ProfilePage from './pages/auth/ProfilePage';
import RegistrationPage from './pages/auth/Registration';
import HomePage from './ts/HomePage';
import { AuthProvider } from './utils/authProvider';

const Routes = () => (
    <AuthProvider>
        <Menu />
        <Router>
            <Route path='/' component={HomePage} />
            <Route path='registration' component={RegistrationPage} />
            <Route path='login' component={LoginPage} />
            <Route path='profile' component={ProfilePage} />
        </Router>
    </AuthProvider>
)


render((<Routes />), document.body);
