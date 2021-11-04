import React from 'react';
import { Link } from 'react-router-dom';
import '../style/postCard.scss';

const PostCard = ({id, index, title, createdAt, text }) => {

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const shortYear = year.toString().substr(2,4);
    const month = converted.toLocaleString('en', { month: 'short' });;
    const date = converted.getDate();

    return `${date} ${month} ${shortYear}`;
  }

  const generatePreview = (text) => {
    let textLength = 180;
    const previewText = text.substr(0, textLength);
    const trimmedText = previewText.replaceAll('#', '').replaceAll('`', '').replaceAll('*', '');

    return `${trimmedText}...`;
  }

  return (
    <article className="postCard">
      <div className="postCard__leftbox">
        <span className="postCard__index">
          {`No. ${index}`}
        </span>
        <span className="postCard__createAt">
          {convertDate(createdAt)}
        </span>
      </div>
      <div className="postCard__middlebox">
        <Link to={{pathname: `/post/${id}`}}>
          <h3 className="postCard__title">{title}</h3>
        </Link>
        <p className="postCard__preview">{generatePreview(text)}</p>
      </div>
      <div className="postCard__rightbox">
        <Link to={{pathname: `/post/${id}`}} className="postCard__readBtn hover-button">
          Read more
        </Link>
      </div>
    </article>
  )
}

export default React.memo(PostCard);