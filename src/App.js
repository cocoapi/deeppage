import React from 'react';

// import logo from './logo.svg';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import './App.css';
import ArticleLayerContainer from './containers/ArticleLayerContainer'

const contents = [{
  title: 'newTitle',
  article: '디비디비딮'
},{
  title: '디비디빋비디비딥디',
  article: '딮하우스 점검하는 맨~'
},{
  title: '엑소스 히어로즈',
  article: '바소리 넘모 조와~'
},{
  title: '미키나노!',
  article: '중삼인거야'
},{
  title: '멬우미 핫피',
  article: '이쭈닷테~'
},

]

export const ArticleContext = React.createContext({
  articles: [],
  removeByIndex: () => {} 
});
  


function App() {
  const [articles, setArticle] = React.useState([]);
  const removeByIndex = (idx) => {
    if(articles.length > idx){
      var newArticles = articles.map(e=>e);
      newArticles.splice(idx, 1);
      setArticle(newArticles);
    }
  }
  const addItems = (e) => {
    console.log(e)
    if(articles.length === 0 || !articles.includes(e)){
      setArticle([...articles, e]);
    }
  }

  return (
    <div>
      <header style={{
        height: '10vh',
      }}> 
        this is header 
      </header>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <div className="left_menu_bar" style={{
        width: '29vw',
      }}>
        left menu bar
      </div>
      <article style={{
        width: '58vw',
        minHeight: '80vh',
      }}> 
        <ArticleContext.Provider value={{articles: articles, removeByIndex: removeByIndex}}>
          <ArticleLayerContainer/>
        </ArticleContext.Provider>
      </article>
      <nav
      style={{
        width: '13vw',
      }}
      > 
        {
          contents.map((e, idx)=> {
            return(
              <div key={idx} onClick={()=> {addItems(e)}}>
                {e.title}
              </div>
            )
          })
        }
      </nav>
      </div>
      <footer> this is footer </footer>
    </div>
  );
}

export default App;
