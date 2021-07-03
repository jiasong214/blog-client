import React, { useEffect, useState } from 'react';
import '../style/navigation.scss';

const Navigation = ({postService, onFilter}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    postService
      .getCategories()
      .then((data) => setCategories(data))
      .catch(console.error())
  }, [postService]);

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        {categories && categories.map((category, index) => (
          <li 
            key={index} 
            onClick={() => onFilter(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;