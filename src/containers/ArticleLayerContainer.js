import React from 'react';
import GridLayout from 'react-grid-layout'
import ArticleContainer from './ArticleContainer'
import { getWidth } from '../utils/utils'

const contents = [{
    title: 'newTitle',
    article: '디비디비딮'
  },{
    title: '디비디빋비디비딥디',
    article: '딮하우스 점검하는 맨~'
  },{
    title: '엑소스 히어로즈',
    article: '바소리 넘모 조와~'
  },

]

const defaultLayout = {x: 0, y: 0, w: 10, h: 1, minW: 6,};

const ArticleLayerContainer = () => {
  var layout = [];
  contents.forEach((e, idx)=>{
    var xPos = (idx % 4) * 10;
    var yPos = Math.floor( idx / 4 );
    layout = [ ...layout, {i: e.title, ...defaultLayout, x: xPos, y: yPos}];
  })
  return (
    <GridLayout className="layout" layout={layout} cols={40} rowHeight={60} width={getWidth()}>
      {
        contents.map(e=>{
          return(
            <div key={e.title}>
              <ArticleContainer contents={e}/>
            </div>
          );
        })
      }
    </GridLayout>
  );
}

export default ArticleLayerContainer;