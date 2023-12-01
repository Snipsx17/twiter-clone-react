import { useState } from 'react';
import Button from '../../components/Button';
import login from './service';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    await login(credentials);
    onLogin();
  };

  const onChangeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const disabled = !(credentials.username && credentials.password);
  return (
    <div>
      <h1 className="login-title">Login</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" onChange={onChangeHandler} />
        <br />
        <input type="password" name="password" onChange={onChangeHandler} />
        <br />
        <Button
          $variant="primary"
          children="Login"
          disabled={disabled ? 'disabled' : ''}
        />
      </form>
    </div>
  );
};

export default LoginPage;
