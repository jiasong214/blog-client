import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import Navigation from '../components/Navigation';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({postService, posts, changeCategory}) => {
  //all categories for navigation list
  const [categories, setCategories] = useState([]);
  // //posts for posts list
  // const [posts, setPosts] = useState([]);

  //update category list
  useEffect(() => {
    postService
      .getCategories()
      .then((data) => setCategories(data))
      .catch(console.error())
  }, [postService]);

  // //update post list depend on selected category
  // useEffect(() => {
  //   postService
  //     .getPostsByCategory(category)
  //     .then((data) => setPosts(data))
  //     .catch(console.error())
  // }, [postService, category]);


  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} />
      <CreatePostBtn />
      <Navigation categories={categories} changeCategory={changeCategory} />
    </main>
  )
}

export default Main;