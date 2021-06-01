import React from 'react';
import InnerArticle from '../components/InnerArticle';
import InnerArticleTitle from '../components/InnerArticleTitle';
import '../styles/MainArticle.css';

const ArticleContainer = (props) => {
  // console.log(props)
  const [minimize, setMinimize] = React.useState(false);
  const toggleMini = () => {
    setMinimize(!minimize);
  }
  console.log("ref: ", props.ref)
  return (
    <div className="articleWrapper" style={{height: minimize ? '30px' : '100%'}}>
      <InnerArticleTitle content={props.contents.title} close={props.close} minimize={toggleMini}></InnerArticleTitle>
      <InnerArticle content={props.contents.article}></InnerArticle>
    </div>
  );
}

export default ArticleContainer;