import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import gettingStarted from './gettingStarted';

class App extends React.Component {
  constructor (props){
    super(props);
    this.getStarted = this.getStarted.bind(this);
  }

  getStarted(){
    console.log('Oh my god, look at her butt.');
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <p>Welcome to Build-A-Toy!</p>
          <button onClick={this.getStarted}>Get Started</button>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));