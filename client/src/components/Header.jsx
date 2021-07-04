import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

import LoginBtn from './LoginBtn';

const Header = ({changeCategory, tokenStorage}) => {
  return (
    <header className="header">
      <div>
        <h1 className="header__title" onClick={() => changeCategory()}>
          <Link to='/'>JIA</Link>
        </h1>
        <div className="header__login">
          <LoginBtn tokenStorage={tokenStorage} />
        </div>
      </div>
    </header>
  )
}

export default Header;