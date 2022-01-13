import { h } from 'preact';
import { useAuth } from '../../utils/auth/AuthContext';

const ProfilePage = ():h.JSX.Element => {
  const { user } = useAuth();
  //   console.log(user);
  return (
    <h2>
      Email:
      {user?.email}
    </h2>
  );
}

export default ProfilePage;
