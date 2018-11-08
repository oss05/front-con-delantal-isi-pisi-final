import React, { Component } from 'react';
import NavbarFeatures from '../navbar';
import FormsPage from './content';
import FooterPage from '../footer';

class Login extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures/>
        <FormsPage/>
        <FooterPage/>
      </div>
    );
  }
}

export default Login;
