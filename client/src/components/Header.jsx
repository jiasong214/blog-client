import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';

const Header = ({changeCategory}) => {
  return (
    <header className="header">
      <div>
        <h1 className="header__title" onClick={() => changeCategory()}>
          <Link to='/'>JIA</Link>
        </h1>
        <div className="header__login" >
          <Link to='/login'>LOG IN</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;