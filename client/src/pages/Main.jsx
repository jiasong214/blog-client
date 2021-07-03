import React, { useState } from 'react';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import Navigation from '../components/Navigation';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({postService}) => {
  const [category, setCategory] = useState();

  const onFilter = (category) => setCategory(category);

  return (
    <main className='main'>
      <Intro />
      <PostCardsList postService={postService} category={category} />
      <CreatePostBtn />
      <Navigation postService={postService} onFilter={onFilter} />
    </main>
  )
}

export default Main;