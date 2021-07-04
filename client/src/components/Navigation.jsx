import React from 'react';
import '../style/navigation.scss';

const Navigation = ({categories, changeCategory}) => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        {categories && categories.map((category, index) => (
          <li 
            key={index} 
            onClick={() => changeCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;