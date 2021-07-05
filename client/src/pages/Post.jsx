import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EditPostBtn from '../components/EditPostBtn';
import DeletePostBtn from '../components/DeletePostBtn';
import '../style/post.scss';

const Post = ({postService, changePostsByDelete, user}) => {
  const params = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);

  //get the post
  useEffect(() => {
    postService
      .getPostById(params.id)
      .then((data) => setPost(...data))
      .catch(console.error());
  }, [postService, params.id]);

  //delete the post
  const onDelete = (id) => {
    if (window.confirm('Do you want to delete this post?')) {
      postService
        .deletePost(id)
        .then(() => changePostsByDelete(id))
        .catch(console.error());
      
      history.push("/");
    }
  };

  return (
    <>
    <section className='post'>
      <h2 className="post__title">{post.title}</h2>
      <span className="post__createAt">{post.createAt}</span>
      <div className="post__text" dangerouslySetInnerHTML={{__html: post.text}} />
    </section>
    {user && 
      <div className="post__adminBtn">
        <EditPostBtn id={params.id} />
        <DeletePostBtn id={params.id} onDelete={onDelete} />
      </div>
    }
    </>
  )
}

export default Post;