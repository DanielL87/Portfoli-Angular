import React from 'react';
import Header from './Header';
import Resume from './Resume';
import Error404 from './Error404';
import AboutMe from './AboutMe';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/aboutme' component={AboutMe} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;