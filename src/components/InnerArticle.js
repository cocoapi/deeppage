import React from 'react';
import '../styles/MainArticle.css';

const InnerArticle = (props) => {
  return(
    <div className="articleBody">
      { props.content }
    </div>
  );
}

export default InnerArticle;