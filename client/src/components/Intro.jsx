import React from 'react';
import '../style/intro.scss';

import Avatar from '../images/avatar2.jpg';
const Intro = () => {
  return (
    <aside className="intro">
      <div className="intro__img">
        <img src={Avatar} alt="profile" />
      </div>
      <p className="intro__text">
        Personal Blog by <a href='https://github.com/JiaSong214' target="_blank" rel="noreferrer">Jia Song</a>
      </p>
    </aside>
  )
}

export default Intro;