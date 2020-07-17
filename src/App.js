import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShortMe from './container/ShortMe';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ShortMe />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
