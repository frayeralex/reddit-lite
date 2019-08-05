import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FrontPage } from 'pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={FrontPage} />
      </Switch>
    </div>
  );
}

export default App;
