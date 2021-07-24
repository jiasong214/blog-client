import React, { useEffect, useRef, useCallback} from 'react';
import { useAuth } from '../context/AuthContext';
import Intro from '../components/Intro';
import PostCardsList from '../components/PostCartsList';
import CreatePostBtn from '../components/CreatePostBtn';

const Main = ({ loading, error, posts, total, changePostsNumber }) => {
  const { user } = useAuth();
  const loader = useRef(null);

  //when loader touch a bottom, change posts number. (to get more posts in usePosts)
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) changePostsNumber();
  }, []);

  //create observer for infinite scrolling
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  

  return (
    <main className='main'>
      <Intro />
      <PostCardsList posts={posts} total={total} />
      {loading && <div>Loading next posts...</div>}
      {error && <div>Coudn't get next post...</div>}
      {user && user.token &&  <CreatePostBtn /> }
      <div ref={loader} />
    </main>
  )
}

export default Main;