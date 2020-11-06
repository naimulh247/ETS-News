import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../../Elements/Header/Header'
import Technology from '../../Components/Technology/Technology'
import Sports from '../../Components/Sports/Sports'
import Entertainment from '../../Components/Entertainment/Entertainment'

function App() {
  const [search, setSearch] = React.useState('');
  return (
    <BrowserRouter>
      <React.Fragment>
      <Header value={search} onChange={setSearch}/>
        <Switch>
          <Route path="/" render={() => <Home search={search} />} exact />
          <Route path="/tech" component={Technology} />
          <Route path="/sports" component={Sports} />
          <Route path="/ent" component={Entertainment}/>
        </Switch>
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
