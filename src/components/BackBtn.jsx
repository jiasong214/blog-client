import React from 'react';
import { Link } from 'react-router-dom';
import '../style/backBtn.scss';


const BackBtn = () => {
  return (
    <aside className="backBtn">
      <div>
        <Link to='/' className="hover-button">
          &larr; Back
        </Link>
      </div>
    </aside>
  )
}

export default React.memo(BackBtn);