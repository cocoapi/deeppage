import React from 'react';
import ArticleLayerContainer from './ArticleLayerContainer';
import { ArticleContext } from '../App';

const Front = (props) => {
  return (
    <ArticleContext.Provider value={{ ...props.articles }}>
      <ArticleLayerContainer />
    </ArticleContext.Provider>
  );
}

export default Front;