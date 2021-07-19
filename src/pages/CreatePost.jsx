import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Markdown from '../components/Markdown';
import '../style/createPost.scss';

const CreatePost = ({postService, changePostsByCreate, changePostsByUpdate}) => {
  const history = useHistory();
  const params = useParams();
  const [formerData, setFormerData] = useState();
  const [title, setTitle] = useState();
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
      setTitle(formerData.title);
      setMarkdown(formerData.text);
    }
  }, [formerData])

  //input handling
  const onTitleChange = (event) => setTitle(event.target.value);
  const onMarkdownChange = (event) => setMarkdown(event.target.value);

  //input validating
  const validateTitle = (title) => {
    if(title === '') {
      alert("Title must be filled out");
      return false;
    }
    return true;
  }


  //form submit
  const onSubmit = (event) => {
    event.preventDefault();

    //if title is not filled out, return
    if(!validateTitle(title)) return;

    if(params.id){
    //UPDATE
      postService
        .updatePost(params.id, title, markdown)
        .then((data) => changePostsByUpdate(params.id, data))
        .catch(console.error);

      history.push(`/post/${params.id}`);
    }else {
    //CREATE
      postService
        .createPost(title, markdown)
        .then((data) => changePostsByCreate(data))
        .catch(console.error);

      history.push("/");
    }
  }

  return (
    <>
      <BackBtn />
      <div className="createPost">
        <div className="createPost-titlebox">
          <input 
            type="text" 
            className="createPost__title" 
            placeholder="Post Title" 
            value={title ? title : ''}
            onChange={onTitleChange} 
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
    </>
  );
}

export default CreatePost;