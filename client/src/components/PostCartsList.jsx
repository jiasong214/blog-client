import React from 'react';
import PostCard from './PostCard';
import '../style/postCardsList.scss';

const PostCardsList = ({posts}) => {
  console.log(posts)
  return (
    <>
      {posts.length === 0 && <p className='posts-empty'>No Posts Yet</p>}
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