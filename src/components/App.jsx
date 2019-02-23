import React from 'react';
import Header from './Header';
import Resume from './Resume';
import Error404 from './Error404';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    }
  }

  handleSelectedTicket(){
  console.log("Function Works!")
  }

  render() {

    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/projectlist' component={ProjectList} />
        <Route path='/aboutme' component={AboutMe} />
        <Route component={Error404} />
      </Switch>
      </div>
    )
  }
}

export default App;

