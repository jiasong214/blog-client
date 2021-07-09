import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import Markdown from '../components/Markdown';
import '../style/createPost.scss';

const CreatePost = ({postService, changePostsByCreate, changePostsByUpdate}) => {
  const history = useHistory();
  const params = useParams();
  const [formerData, setFormerData] = useState();
  const [postTitle, setPostTitle] = useState();
  const [postSubtitle, setPostSubtitle] = useState();
  const [markdown, setMarkdown] = useState('');

  //UPDATE: if it's for update, set post's data
  useEffect(() => {
    if(params.id){
      postService
        .getPostById(params.id)
        .then((data) => setFormerData(data))
        .catch(console.error());
    }
  }, [postService, params.id]);

  //UPDATE: after formerData is set, set all input state with that.
  useEffect(() => {
    if(formerData){
      //set former state
      setPostTitle(formerData.title);
      setPostSubtitle(formerData.subtitle);
      setMarkdown(formerData.text);
    }
  }, [formerData])

  //input handling
  const onTitleChange = (event) => setPostTitle(event.target.value);
  const onSubtitleChange = (event) => setPostSubtitle(event.target.value);
  const onMarkdownChange = (event) => setMarkdown(event.target.value);

  //form submit
  const onSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: postTitle,
      subtitle: postSubtitle,
      text: markdown
    }

    if(params.id){
    //UPDATE
      postService
        .updatePost(params.id , post.title, post.subtitle, post.text)
        .then((data) => changePostsByUpdate(params.id, data))
        .catch(console.error);

      history.push(`/post/${params.id}`);
    }else {
    //CREATE
      postService
        .createPost(post.title, post.subtitle, post.text)
        .then((data) => changePostsByCreate(data))
        .catch(console.error);

      history.push("/");
    }
  }

  return (
    <div className="createPost">
      <div className="createPost-titlebox">
        <input 
          type="text" 
          className="createPost__title" 
          placeholder="Post Title" 
          value={postTitle ? postTitle : ''}
          onChange={onTitleChange} 
        />
        <input 
          type="text" 
          className="createPost__subtitle" 
          placeholder="Post Subtitle" 
          value={postSubtitle ? postSubtitle : ''}
          onChange={onSubtitleChange} 
        />
        </div>
      <div className="createPost-textbox">
          <textarea onChange={onMarkdownChange} value={markdown}></textarea>
          <div className="createPost__markdown">
            <Markdown text={markdown} />
          </div>
        </div>
      <div className="createPost-buttonbox">
        <button onClick={onSubmit} className="createPost__submitBtn">Compost</button>
      </div>
    </div>
  );
}

export default CreatePost;