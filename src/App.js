import React from 'react';
import GridLayout from 'react-grid-layout'
// import logo from './logo.svg';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import './App.css';

function App() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];
  return (
    <div className="App">
      <header> this is header </header>
      <nav> this is nav </nav>
      <article> 
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      </article>
      <footer> this is footer </footer>
    </div>
  );
}

export default App;
