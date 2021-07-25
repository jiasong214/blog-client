import { useState, useEffect } from 'react';


const usePost = ({postService}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [ currentPostIndex, setCurrentPostIndex ] = useState(0);

  //load new data whenever currentPostIndex is changed
  useEffect(() => {
    setLoading(true);
    setError(false);

    postService
      .getPosts(currentPostIndex)
      .then(result => {
        setTotal(result.total);
        return result.data;
      })
      .then((data) => setPosts((prev) => [...new Set([...prev, ...data])]))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, [postService, currentPostIndex])

  //update current index to get more post
  const updateCurrentPostIndex = (currentNum) => {
    setCurrentPostIndex(currentNum);
    console.log(`Getting more posts from index ${currentNum}...`);
  }

  const deletePost = (id) => {
    setPosts(() => posts.filter((post) => parseInt(post.id) !== parseInt(id)));
  };

  const createPost = (post) => {
    setPosts(() => [post, ...posts]);
  };

  const updatePost = (id, updated) => {
    setPosts(() => posts.map((post) => parseInt(post.id) === parseInt(id) ? updated : post));
  };

  return { posts, total, loading, error, createPost, updatePost, deletePost, updateCurrentPostIndex }
}

export default usePost;