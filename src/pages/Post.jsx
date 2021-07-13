import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Markdown from '../components/Markdown';
import PostSetting from '../components/PostSetting';
import Comments from '../components/Comments';
import Loading from '../components/Loading';
import '../style/post.scss';


const Post = ({postService, changePostsByDelete}) => {
  const params = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  const { user } = useAuth();

  //get the post
  useEffect(() => {
    postService
      .getPostById(params.id)
      .then((data) => setPost(data))
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

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const month = converted.toLocaleString('en', { month: 'long' });;
    const date = converted.getDate();

    return `${date} ${month}, ${year}`;
  }

  return (
    <>
    {post.length === 0 ? <Loading /> :
      (<section className='post'>
        <h2 className="post__title">{post.title}</h2>
        <span className="post__createdAt">{convertDate(post.createdAt)}</span>
        <div className="post__contents">
          <Markdown text={post.text} />
        </div>
        {user && user.token && <PostSetting id={params.id} onDelete={onDelete} />}
        <Comments />
      </section>
      )
    }
    </>
  )
}

export default Post;