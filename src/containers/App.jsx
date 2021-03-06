import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from './HomeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
        </Switch>
      </div>
    );
  }
}

export default App;
