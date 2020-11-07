import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'

import Technology from '../../Components/Technology/Technology'
import Sports from '../../Components/Sports/Sports'
import Entertainment from '../../Components/Entertainment/Entertainment'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/tech" component={Technology} />
          <Route path="/sports" component={Sports} />
          <Route path="/ent" component={Entertainment}/>
        </Switch>
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
