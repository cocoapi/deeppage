import React from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout'
import ArticleContainer from './ArticleContainer'
import { ArticleContext } from '../App'
import InnerArticleTitle from '../components/InnerArticleTitle';
// import { getWidth } from '../utils/utils'

const defaultLayout = { x: 0, y: 0, w: 40, h: 4, minW: 6, };

const ArticleLayerContainer = (props) => {
  const ResponsiveGridLayout = WidthProvider(GridLayout);
  var layout = [];

  return (
    <ArticleContext.Consumer>
      {({ board, articles, removeByIndex, addItems }) => {
        // console.log(Math.min(board.length, 13))
        console.log(articles)
        layout = [...layout, { i: 'board', ...defaultLayout, x: 0, y: 100, h: Math.min(board.length, 13)}];
        articles.forEach((e, idx) => {
          var xPos = (idx % 4) * 10;
          var yPos = 0

          layout = [...layout, { i: e.title, ...defaultLayout, x: xPos, y: yPos}];
        })
        return (
          <ResponsiveGridLayout style={{width: '100%'}} className="layout" layout={layout} autoSize={true} compactType={'horizontal'} cols={40} rowHeight={30}>
            {
              articles.map((e, idx) => {
                return (
                  <div key={e.title}>
                    <ArticleContainer contents={e} close={{idx: idx, callback: removeByIndex}} />
                  </div>
                );
              })
            }
            <div key="board" className="articleWrapper">
              <InnerArticleTitle content="보드1"></InnerArticleTitle>
              {
                board.map((e, idx) => {
                  console.log(e)
                  return (
                    <div className="items" key={idx} title={e.title} onClick={() => { addItems(e) }}>
                      {e.title}
                    </div>
                  )
                })
              }
            </div>
          </ResponsiveGridLayout>
        )
      }}
    </ArticleContext.Consumer>
  );
}

export default ArticleLayerContainer;