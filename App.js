import React, { Component } from 'react';
import Login from './components/login/login';
import Contenido_restaurante from './components/restaurantes/contenido_restaurante';
import Register from './components/register/register';

class App extends Component {
  render() {
    return (
      <div>
      
        <Register/>
      </div>
    );
  }
}

export default App;