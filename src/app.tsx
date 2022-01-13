import { h, render } from 'preact';
import Router, { Route } from 'preact-router';
import Menu from './components/Menu';
import LoginPage from './pages/auth/LoginPage';
import ProfilePage from './pages/auth/ProfilePage';
import RegistrationPage from './pages/auth/Registration';
import HomePage from './ts/HomePage';
import { AuthProvider } from './utils/auth/AuthProvider';
import useFirebaseAuthProvider from './utils/auth/useFirebaseAuthProvider';
import FirebaseAuthService from './utils/firebase/FirebaseAuthService';

const authService = FirebaseAuthService()
const authProvider = () => useFirebaseAuthProvider(authService)

const Routes = () => (
  <AuthProvider auth={authProvider()} >
    <Menu />
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="registration" component={RegistrationPage} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfilePage} />
    </Router>
  </AuthProvider>
)

render((<Routes />), document.body);
