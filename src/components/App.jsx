import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Resume from './Resume';
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
      </Switch>
    </div>
  );
}

export default App;