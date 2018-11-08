import React, { Component } from 'react'
import NavbarFeatures from '../navbar';
import FooterPage from '../footer';
import Restaurantes from './restaurantes'

class Contenido_restaurante extends Component {
    render() { 
        return (
            <div>
                <NavbarFeatures/>
                <Restaurantes/>
                <FooterPage/>  
            </div> 
         );
    }
}
 
export default Contenido_restaurante;