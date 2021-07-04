import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">
          <Link to='/'>JIA</Link>
        </h1>
        <div className="header__login">LOG IN</div>
      </div>
    </header>
  )
}

export default Header;