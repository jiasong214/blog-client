import React from 'react';
import '../style/intro.scss';
// import Avatar from '../images/avatar2.jpg';
import image from '../assets/image.png';

const Intro = () => {
  return (
    <aside className="intro">
      <h1 className="intro__title">
        Blog
      </h1>
      <p className="intro__text">
        About ... by <a href='https://github.com/JiaSong214' target="_blank" rel="noreferrer">Jia Song</a>
      </p>
      <div className="intro__img">
        <img src={image} alt="profile" />
      </div>
    </aside>
  )
}

export default Intro;