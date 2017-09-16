import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
