import React from 'react';
import { useAuth } from '../context/AuthContext';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({ posts }) => {
  const { user } = useAuth();

  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} />
      {user && <CreatePostBtn />}
    </main>
  )
}

export default Main;