import React from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout'
import ArticleContainer from './ArticleContainer'
import { ArticleContext } from '../App'
// import { getWidth } from '../utils/utils'

const defaultLayout = { x: 0, y: 0, w: 40, h: 1, minW: 6, };

const ArticleLayerContainer = (props) => {
  const ResponsiveGridLayout = WidthProvider(GridLayout);
  var layout = [];
  return (
    <ArticleContext.Consumer>
      {({ articles, removeByIndex }) => {
        articles.forEach((e, idx) => {
          var xPos = (idx % 4) * 10;
          var yPos = Math.floor(idx / 4);

          layout = [...layout, { i: e.title, ...defaultLayout, x: xPos, y: yPos }];
        })
        return (
          <ResponsiveGridLayout className="layout" layout={layout} autoSize={false} compactType={'horizontal'} cols={40} rowHeight={60}>
            {
              articles.map((e, idx) => {
                return (
                  <div key={e.title}>
                    <ArticleContainer contents={e} close={{idx: idx, callback: removeByIndex}} />
                  </div>
                );
              })
            }
          </ResponsiveGridLayout>
        )
      }}
    </ArticleContext.Consumer>
  );
}

export default ArticleLayerContainer;