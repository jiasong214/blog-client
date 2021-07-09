import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style/footer.scss';

const Footer = () => {
  const history = useHistory();
  const { user, onLogout } = useAuth();

  const onClickLogout = () => {
    if (window.confirm('Do you want to log out?')) {
      onLogout();
      history.push('/');
    }
  }

  return (
    <footer className="footer">
       {user ? 
          <div className='footer__logout' onClick={onClickLogout}>Logout Admin</div> : 
          <Link className="footer__login" to='/login'>Admin account</Link>
        }
      <p className="footer__copyright">
        &copy; 2021 Jia Song
      </p>
    </footer>
  )
}

export default Footer;