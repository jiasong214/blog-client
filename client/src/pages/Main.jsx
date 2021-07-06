import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import Navigation from '../components/Navigation';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({postService, posts, changeCategory}) => {
  //all categories for navigation list
  const [categories, setCategories] = useState([]);
  //user state from AuthContext
  const { user } = useAuth();

  //!!!두번씩 호출되는 이유 찾기
  console.log("Main");

  //update category list
  useEffect(() => {
    postService
      .getCategories()
      .then((data) => setCategories(data))
      .catch(console.error);
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