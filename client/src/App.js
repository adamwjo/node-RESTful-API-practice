import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import AppNavbar from './components/AppNavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
      </div>
    );
  }
}

export default App;
