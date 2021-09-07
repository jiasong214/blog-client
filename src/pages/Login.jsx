import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BackBtn from '../components/BackBtn';
import '../style/login.scss';
import { motion } from 'framer-motion';

const Login = () => {
  const history = useHistory();
  const { onLogin } = useAuth();
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const onSubmit = async (event) => {
    event.preventDefault();

    await onLogin(username, password)
      .then(data => {
        data.token ? history.push('/') : setError(true);
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5,}}
      style={{
        position: "relative",
        zIndex: 10
      }}
    >
      <BackBtn />
      <section className="login">
        <h2 className="login__title">Account Login</h2>
        <p className="login__error" data-active={error}>Check your Username and Password.</p>
        <form onSubmit={(event) => onSubmit(event)}>
          <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(event) => onChangeUsername(event)}
            autoFocus
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(event) => onChangePassword(event)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </motion.div>
  )
}

export default React.memo(Login);