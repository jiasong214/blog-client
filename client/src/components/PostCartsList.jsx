import React from 'react';
import PostCard from './PostCard';
import '../style/postCardsList.scss';

const PostCardsList = ({posts}) => {
  return (
    <>
      {posts.length === 0 && <p className='posts-empty'>No Posts Yet</p>}
      <ul className="postCardsList">
        {posts.map((post) => (
          <PostCard 
            key={post.id}
            id={post.id}
            title={post.title}
            createAt={post.createAt}
            text={post.text} 
            // comments={post.comments}
          />
        ))}
      </ul>
    </>
  )
}

export default PostCardsList;