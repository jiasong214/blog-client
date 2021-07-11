import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import '../style/markdown.scss';


const Markdown = ({text}) => {

  const syntaxHighlighter = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <div className="markdown">
      <ReactMarkdown
        components={syntaxHighlighter}
        remarkPlugins={[gfm]} 
        children={text} />
    </div>
  )
}

export default Markdown;