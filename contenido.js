import React, { Component } from 'react'
import NavbarFeatures from '../navbar';
import FooterPage from '../footer';
import Header from './header'

class Click_restaurante extends Component {
    render() { 
        return (
            <div>
                <NavbarFeatures/>
                <Header/>
                <FooterPage/>  
            </div> 
         );
    }
}
 
export default Click_restaurante;