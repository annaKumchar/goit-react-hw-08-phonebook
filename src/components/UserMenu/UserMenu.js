import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WelcomeWrap, Welcome, Logout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WelcomeWrap>
      <Welcome>Welcome, {user.name}</Welcome>
      <Logout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Logout>
    </WelcomeWrap>
  );
};
