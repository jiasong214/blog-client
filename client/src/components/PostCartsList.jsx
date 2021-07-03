import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import '../style/postCardsList.scss';

const PostCardsList = ({postService, category}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postService
      .getPostsByCategory(category)
      .then((data) => setPosts(data))
      .catch(console.error())
  }, [postService, category]);

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