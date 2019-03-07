import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'

//redux imports
import { Provider } from 'react-redux'
import store from './redux/store'

//components
import AppNavbar from './components/AppNavBar'
import ProductList from './components/ProductList'
import AddProductModal from './components/AddProductModal'
import MainMenu from './components/mainMenu'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
              <MainMenu/>
            <Container>
              <AddProductModal/>
              <ProductList/>
            </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
