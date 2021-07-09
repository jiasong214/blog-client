import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({postService, posts }) => {
  const { user } = useAuth();

  //!!!두번씩 호출되는 이유 찾기
  console.log("Main");



  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} />
      {user && <CreatePostBtn />}
    </main>
  )
}

export default Main;