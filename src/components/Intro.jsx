import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';
// import {AiFillLinkedin} from 'react-icons/ai'
import '../style/intro.scss';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__innerbox">
        <h1 className="intro__title">
          Blog
        </h1>
        <p className="intro__text">
          About blabla React Hook useCallback has ... by <a href='https://github.com/JiaSong214' target="_blank" rel="noreferrer">Jia Song</a>
        </p>
        <div className="intro__links">
          <a href="mailto:jiasong214@gmail.com">
            <MdMail size={18} />
          </a>
          <a href="https://github.com/jiasong214">
            <FaGithub size={18} />
          </a>
          {/* <AiFillLinkedin size={18}></AiFillLinkedin> */}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Intro);