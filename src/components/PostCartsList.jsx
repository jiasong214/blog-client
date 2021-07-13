import React from 'react';
import PostCard from './PostCard';
import Loading from './Loading';
import '../style/postCardsList.scss';

const PostCardsList = ({posts}) => {
  return (
    <>
      {posts.length === 0 && <Loading />}
      <ul className="postCardsList">
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            id={post.id}
            title={post.title}
            subtitle={post.subtitle} 
            createdAt={post.createdAt}
          />
        ))}
      </ul>
    </>
  )
}

export default PostCardsList;