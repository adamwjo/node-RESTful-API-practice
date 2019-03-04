import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import AppNavbar from './components/AppNavBar'
import ProductList from './components/ProductList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <ProductList/>
      </div>
    );
  }
}

export default App;
