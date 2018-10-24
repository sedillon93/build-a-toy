import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import GetStarted from './gettingStarted';
import LandingPage from './landing';

class App extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <button><Link to="/">Home</Link></button>
          <button><Link to = "/getStarted">Get Started</Link></button>
          <Route exact path = "/getStarted" component = {GetStarted}/>
          <Route exact path = "/" component = {LandingPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;