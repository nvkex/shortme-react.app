import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShortMe from './container/ShortMe';
import NavBar from './container/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <ShortMe />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
