import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style/login.scss';

const Login = () => {
  const history = useHistory();
  const { onLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    onLogin(username, password);
    history.push('/');
  }

  
  return (
    <div className="login">
      <h2 className="login__title">LOG IN</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(event) => onChangeUsername(event)}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(event) => onChangePassword(event)}
        />
        <button type="submit">LOG IN</button>
      </form>
      <p className="login__text">* This is for Admin log in.</p>
    </div>
  )
}

export default Login;