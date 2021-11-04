import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import BackBtn from '../components/BackBtn';
import Markdown from '../components/Markdown';
import PostSetting from '../components/PostSetting';
import Comments from '../components/Comments';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import '../style/post.scss';


const Post = ({postService, deletePost}) => {
  const params = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const { user } = useAuth();

  // get the post
  useEffect(() => {
    postService
      .getPostById(params.id)
      .then((data) => setPost(data))
      .catch(console.error());
  }, [postService, params.id]);

  // ready to show
  useEffect(() => {
    if(post?.id !== "") {
      setTimeout(() => {
        setIsReady(true);
      }, 1000)
    }
  }, [post]);


  const onDelete = (id) => {
    if (window.confirm('Do you want to delete this post?')) {
      postService
        .deletePost(id)
        .then(() => deletePost(id))
        .catch(console.error());
      
      history.push("/");
    }
  };

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const month = converted.toLocaleString('en', { month: 'short' });;
    const date = converted.getDate();

    return `${date} ${month} ${year}`;
  }


  return (
    <>
    {!isReady ? <Loading /> :
      (<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        style={{
          position: "relative",
          zIndex: 10
        }}
      >
        <BackBtn />
        <section className='post'>
          <h2 className="post__title">
            {post.title}
          </h2>
          <span className="post__createdAt">
            {convertDate(post.createdAt)}
          </span>
          <div className="post__contents">
            <Markdown text={post.text} />
          </div>
          {user?.token && 
            <PostSetting id={params.id} onDelete={onDelete} />
          }
          <Comments />
        </section>
        <Footer />
      </motion.div>
      )
    }
    </>
  )
}

export default React.memo(Post);