import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style/header.scss';

const Header = ({changeCategory}) => {
  const history = useHistory();
  const { user, onLogout } = useAuth();

  const onClickLogout = () => {
    if (window.confirm('Do you want to log out?')) {
      onLogout();
      history.push('/');
    }
  }

  return (
    <header className="header">
      <div>
        <h1 className="header__title" onClick={() => changeCategory()}>
          <Link to='/'>JIA</Link>
        </h1>
        {user ? 
          <div className='header__logout' onClick={onClickLogout}>LOG OUT</div> : 
          <Link className="header__login" to='/login'>LOG IN</Link>
        }
      </div>
    </header>
  )
}

export default Header;