import React from 'react';
import InnerArticle from '../components/InnerArticle';
import InnerArticleTitle from '../components/InnerArticleTitle';


const ArticleContainer = (props) => {
  console.log(props)
  return (
    <div style={{
      border: '1px solid #DDDDDD',
      borderRadius: '5px',
    }}>
      <InnerArticleTitle content={props.contents.title}></InnerArticleTitle>
      <InnerArticle content={props.contents.article}></InnerArticle>
    </div>
  );
}

export default ArticleContainer;