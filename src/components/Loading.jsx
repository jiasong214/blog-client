import React from 'react';
import '../style/loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="ellipsis">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  )
}

export default Loading;