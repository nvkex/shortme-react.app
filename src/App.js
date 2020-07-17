import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShortMe from './container/ShortMe';
import axios from 'axios';

import Redirector from './components/Redirector';
import './App.css';

class App extends React.Component {
  state = {
    ready: false
  }

  componentDidMount() {
    if (!this.state.ready) {
      axios.get('https://nvkex-short-me.herokuapp.com')
        .then(res => {
          if (res.data.message) {
            this.setState({ ready: true });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

  }

  render() {
    if (this.state.ready) {
      document.querySelector('.loader-container').classList.add('disappear');
    }


    return (
      <div>
        <div className="loader-container">
          <div className="loader text-white text-center">
            <div class="lds-ripple"><div></div><div></div></div>
            <br />
            <p className="display-4 text-center text-muted">Loading</p>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/:slug" exact component={Redirector} />
            <Route path="/" exact component={ShortMe} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
