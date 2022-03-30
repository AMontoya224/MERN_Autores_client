import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import New from './views/New/New';
import Home from './views/Home/Home';
import Update from './views/Update/Update';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <BrowserRouter>
        <Switch>
          <Route path="/new" render={ routeProps => <New {...routeProps} />} />
          <Route path="/edit/:id" render={ (routeProps) => <Update {...routeProps} />}/>
          <Route path="/" render={ routeProps => <Home {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;