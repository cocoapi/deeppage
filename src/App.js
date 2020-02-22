import React from 'react';

// import logo from './logo.svg';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import './App.css';
import ArticleLayerContainer from './containers/ArticleLayerContainer'

function App() {
  return (
    <div className="App">
      <header> this is header </header>
      <nav> this is nav </nav>
      <article> 
        <ArticleLayerContainer/>
        <ArticleLayerContainer/>
      </article>
      <footer> this is footer </footer>
    </div>
  );
}

export default App;
