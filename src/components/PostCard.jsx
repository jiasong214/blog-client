import React from 'react';
import { Link } from 'react-router-dom';
import '../style/postCard.scss';

const PostCard = ({id, index, title, createdAt, text }) => {

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const month = converted.toLocaleString('en', { month: 'long' });;
    const date = converted.getDate();

    return `${date} ${month}, ${year}`;
  }

  const convertIndex = (value) => {
    if(value === 11 || value === 12 || value === 13) return `${value}th Post`;

    if(value % 10 === 1) return `${value}st Post`;
    if(value % 10 === 2) return `${value}nd Post`;
    if(value % 10 === 3) return `${value}st Post`;

    return `${value}th Post`;
  }

  const generatePreview = (text) => {
    let textLength = window.innerWidth > 768 ? 500 : window.innerWidth > 480 ? 360 : 280;
    const previewText = text.substr(0, textLength);
    const trimmedText = previewText.replaceAll('#', '').replaceAll('`', '').replaceAll('*', '');

    return `${trimmedText}...`;
  }

  return (
    <li className="postCard">
      <Link to={{pathname: `/post/${id}`}}>
        <h3 className="postCard__title">{title}</h3>
      </Link>
      <div className="postCard-container">
        <span className="postCard__index">{convertIndex(index)}</span>
        <span className="postCard__dot"></span>
        <span className="postCard__createdAt">{convertDate(createdAt)}</span>
      </div>
      <div className="postCard__preview">{generatePreview(text)}</div>
      <Link to={{pathname: `/post/${id}`}}>
        <div className="postCard__readBtn">Continue Reading &rarr;</div>
      </Link>
    </li>
  )
}

export default React.memo(PostCard);