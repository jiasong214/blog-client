import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EditPostBtn from '../components/EditPostBtn';
import DeletePostBtn from '../components/DeletePostBtn';
import '../style/post.scss';

const Post = ({postService}) => {
  const params = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);

  useEffect(() => {
    postService
      .getPostById(params.id)
      .then((data) => setPost(...data))
      .catch(console.error());
  }, [postService, params.id]);

  const onDelete = (id) => {
    postService
      .deletePost(id)
      .then((data) => console.log(data))
      .catch(console.error());
    
    history.push("/");
  };

  return (
    <>
    <section className='post'>
      <h2 className="post__title">{post.title}</h2>
      <span className="post__createAt">{post.createAt}</span>
      <div className="post__text" dangerouslySetInnerHTML={{__html: post.text}} />
    </section>
    <EditPostBtn id={params.id} />
    <DeletePostBtn id={params.id} onDelete={onDelete} />
    </>
  )
}

export default Post;