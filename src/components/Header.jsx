import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">
          <Link to='/'>#</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header;