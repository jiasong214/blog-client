import React, { createRef, useEffect } from 'react';
import '../style/comments.scss';

const Comments = () => {
  const commentRef = createRef();

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: "https://utteranc.es/client.js",
      repo: "jiasong214/blog-comments",
      "issue-term": "url",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true
    }

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterances);
  }, []);

  return (
    <div className='comments' ref={commentRef} />
  )
}

export default Comments;