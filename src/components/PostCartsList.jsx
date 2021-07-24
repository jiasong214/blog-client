import React from 'react';
import PostCard from './PostCard';
import Loading from './Loading';
import '../style/postCardsList.scss';

const PostCardsList = ({posts, total}) => {
  let index = parseInt(total.count) + 1;

  return (
    <>
      {posts.length === 0 && <Loading />}
      <ul className="postCardsList">
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
      </ul>
    </>
  )
}

export default PostCardsList;