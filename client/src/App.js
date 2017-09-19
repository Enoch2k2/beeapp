import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './containers/Home';
import LogIn from './containers/LogIn';
import SignUp from './containers/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default connect(null)(App);
