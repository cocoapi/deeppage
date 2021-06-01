import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Front from './Front';
import Login from './Login';
import Register from './Register';
import GuestBookContainer from './GuestBookContainer';

const MainArticle = (props) => {
  return (
    <Switch style={{ height: '100%', overflow: 'auto' }}>
      <Route exact path='/'>
        <Front articles={props.ArticleDat}></Front>
      </Route>
      <Route exact path='/Login'>
        <Login />
      </Route>
      <Route exact path='/Register'>
        <Register />
      </Route>
      <Route path='/GuestBook'>
        <GuestBookContainer />
      </Route>
      
    </Switch>
  )
}

export default MainArticle;