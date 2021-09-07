import React, { useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import useInfiniteScroll from '../hooks/useInfitineScroll';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import CreatePostBtn from '../components/CreatePostBtn';
import '../style/main.scss';
import { motion } from 'framer-motion';

const Main = ({ posts, total, updateCurrentPostIndex }) => {
  const { user } = useAuth();

  //when target touch a bottom, update post index. (to get more posts in usePosts)
  const onIntersect = useCallback((entries) => {
    if(posts.length >= total) return;

    const target = entries[0];
    if (target.isIntersecting) updateCurrentPostIndex(posts.length);
  }, [posts]);

  const { setTarget } = useInfiniteScroll({onIntersect});

  const targetStyle = {
    position: "relative",
    top: "-30vh"
  }

  return (
    <motion.main 
      className='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="main-innerbox">
        <Intro />
        <PostCardsList posts={posts} total={total} />
      </div>
      {user && user.token &&  <CreatePostBtn /> }
      <div style={targetStyle} ref={setTarget}/>
    </motion.main>
  )
}

export default Main;