import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Resume from './Resume';
import Error404 from './Error404';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route path='/resume' component={Resume} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;