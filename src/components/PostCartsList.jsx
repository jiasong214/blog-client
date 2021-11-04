import React from 'react';
import PostCard from './PostCard';
import Loading from './Loading';
import Footer from './Footer';

const PostCardsList = ({posts, total}) => {
  let index = total + 1;

  return (
    <>
      {posts.length === 0 ? <Loading /> :
      <section className="postCardsList">
        {posts.map((post) => {
          index --;

          return (
            <PostCard
              key={post.id}
              id={post.id}
              index={index}
              title={post.title}
              createdAt={post.createdAt}
              text={post.text} 
            />
          )
        })}
        <Footer />
      </section>
      }
    </>
  )
}

export default React.memo(PostCardsList);