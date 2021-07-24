import { useState, useEffect } from 'react';


const usePost = ({postService, postsNumber}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  //load new data whenever postsNumber is changed
  useEffect(() => {
    setLoading(true);
    setError(false);

    postService
      .getPosts(postsNumber)
      .then(result => {
        setTotal(result.total);
        return result.data;
      })
      .then((data) => setPosts((posts) => [...new Set([...posts, ...data])]))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, [postService, postsNumber])


  const deletePost = (id) => {
    setPosts(() => posts.filter((post) => parseInt(post.id) !== parseInt(id)));
  };

  const createPost = (post) => {
    setPosts(() => [post, ...posts]);
  };

  const updatePost = (id, updated) => {
    setPosts(() => posts.map((post) => parseInt(post.id) === parseInt(id) ? updated : post));
  };

  return { posts, total, loading, error, createPost, updatePost, deletePost }
}

export default usePost;