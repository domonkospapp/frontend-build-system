import { h } from 'preact';
import { useAuth } from '../../utils/AuthContext';

const ProfilePage = ():JSX.Element => {
    const { user } = useAuth();
    console.log(user)
    return <h2>Email: {user?.email}</h2>
	
};

export default ProfilePage;