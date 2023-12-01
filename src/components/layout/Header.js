import Button from '../../components/Button';
import { ReactComponent as Icon } from '../../assets/logo.svg';
import { useAuth } from '../../pages/auth/Context';

const Header = () => {
  const { isLogged, logoutHandler } = useAuth();

  return (
    <header>
      <div>
        <Icon width="64" />
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={logoutHandler}>Logout</Button>
        ) : (
          <Button $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
