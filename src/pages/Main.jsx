import React, { useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import useInfiniteScroll from '../hooks/useInfitineScroll';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({ posts, total, updateCurrentPostIndex }) => {
  const { user } = useAuth();

  //when target touch a bottom, update post index. (to get more posts in usePosts)
  const onIntersect = useCallback((entries) => {
    if(posts.length >= total) return;

    const target = entries[0];
    if (target.isIntersecting) updateCurrentPostIndex(posts.length);
  }, [posts]);

  const { setTarget } = useInfiniteScroll({onIntersect});

  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} total={total} />
      {user && user.token &&  <CreatePostBtn /> }
      <div ref={setTarget}/>
    </main>
  )
}

export default Main;