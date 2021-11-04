import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';
import '../style/intro.scss';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__innerbox">
        <h1 className="intro__title">
          Blog
        </h1>
        <p className="intro__text">
          About how I made this Blog.
          <br/> by <em>Jia Song</em>
        </p>
        <div className="intro__links">
          <a href="mailto:jiasong214@gmail.com">
            <MdMail size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jiasong214/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={18} />
          </a>
          <a href="https://github.com/jiasong214" target="_blank" rel="noreferrer">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Intro);