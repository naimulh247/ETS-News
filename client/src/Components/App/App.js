import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../../Elements/Header/Header'
import Technology from '../../Components/Technology/Technology'
import Sports from '../../Components/Sports/Sports'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/tech" component={Technology} />
          <Route path="/sports" component={Sports} />
        </Switch>
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
