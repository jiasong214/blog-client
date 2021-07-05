import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import Navigation from '../components/Navigation';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({postService, posts, changeCategory, user}) => {
  //all categories for navigation list
  const [categories, setCategories] = useState([]);

  console.log(`user: ${user}`)
  //update category list
  useEffect(() => {
    postService
      .getCategories()
      .then((data) => setCategories(data))
      .catch(console.error())
  }, [postService]);

  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} />
      <Navigation categories={categories} changeCategory={changeCategory} />
      {user && <CreatePostBtn />}
    </main>
  )
}

export default Main;