import React from 'react';
import {BrowserRouter, Switch, Router} from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../../Elements/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <React.Fragment>
        <Home/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
