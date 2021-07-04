import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import '../style/createPost.scss';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const CreatePost = ({postService}) => {
  const history = useHistory();
  const params = useParams();
  const [formerData, setFormerData] = useState();
  const [postTitle, setPostTitle] = useState();
  const [postCategory, setPostCategory] = useState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //UPDATE: if it's for update, set post's data
  useEffect(() => {
    if(params.id){
      postService
        .getPostById(params.id)
        .then((data) => setFormerData(...data))
        .catch(console.error());
    }
  }, [postService, params.id]);

  //UPDATE: after formerData is set, set all input state with that.
  useEffect(() => {
    if(formerData){
      //set title, category state
      setPostTitle(formerData.title);
      setPostCategory(formerData.category);

      //convert html text to draft format and set state
      const blocksFromHtml = htmlToDraft(formerData.text);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [formerData])

  //input handling
  const onTitleChange = (event) => {
    setPostTitle(event.target.value);
  };
  const onCategoryChange = (event) => setPostCategory(event.target.value);
  const onEditorStateChange = (editorState) => setEditorState(editorState);

  //convert draft format to html format
  const convertToHtml = (editorState) => {
    const rawText = convertToRaw(editorState.getCurrentContent())
    const HtmlConversion = draftToHtml(rawText);

    return HtmlConversion;
  }

  //convert category strings to array
  const convertToArray = (postCategory) => {
    if(!postCategory || postCategory.length === 0) return;

    let categoryArr = postCategory.split(' ');
    
    return categoryArr.map((category) => {
      const lowerStr = category.toString().toLowerCase();
      const pureStr = lowerStr.split("#");

      return pureStr[pureStr.length - 1];
    })
  }

  //form submit
  const onSubmit = (event) => {
    event.preventDefault();

    const post = {
      category: convertToArray(postCategory),
      title: postTitle,
      text: convertToHtml(editorState)
    }

    if(params.id){
    //UPDATE
      postService
        .updatePost(params.id , post.category, post.title, post.text)
        .then((data) => console.log(data))
        .catch(console.error());

      history.push(`/post?id=${params.id}`);
    }else {
    //CREATE
      postService
      .createPost(post.category, post.title, post.text)
      .then((data) => console.log(data))
      .catch(console.error());

      history.push("/");
    }
  }


  return (
    <div className="createPost">
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          className="createPost__title" 
          placeholder="Title" 
          value={postTitle ? postTitle : ''}
          onChange={(event) => onTitleChange(event)} 
        />
        <input  
          type="text" 
          className="createPost__category" 
          placeholder="#React #Javascript" 
          value={postCategory ? postCategory : ''} 
          onChange={(event) => onCategoryChange(event)} 
        />
        <Editor
          wrapperClassName="createPost__wrapper"
          editorClassName="createPost__editor"
          
          //language setting
          localization={{ locale: "en" }}
          //tool bar setting
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            blockType: { inDropdown: true }
          }}

          //default state
          editorState={editorState}
          //update state event
          onEditorStateChange={onEditorStateChange}
        />
        <button type='submit' className="createPost__submitBtn">Compost</button>
      </form>
    </div>
  );
}

export default CreatePost;