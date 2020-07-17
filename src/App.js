import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShortMe from './container/ShortMe';

import Redirector from './components/Redirector';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:slug" exact component={Redirector} />
          <Route path="/" exact component={ShortMe} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
