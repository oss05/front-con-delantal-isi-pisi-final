import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Fa, Container, Col, Row } from 'mdbreact';
import '../styles/restaurantes.css'
class Restaurantes extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:props.name || "",
            id:props.id || "",
            image:props.image || ""
        }

    }

    

    render(){

        return(
        <Container className="restaurantes">
            
            <Row>
            <Col lg="4">
                    <Card>
                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Restaurante 1</CardTitle>
                            <hr />
                            <CardText>Descripción.</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>
                    
            <Col lg="4">
                    <Card>
                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Restaurante 2</CardTitle>
                            <hr />
                            <CardText>Descripción.</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>

            <Col lg="4">
                    <Card>
                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" overlay="white-slight" hover waves alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Restaurante 3</CardTitle>
                            <hr />
                            <CardText>Descripción.</CardText>
                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Elegir este restaurante <Fa icon="angle-double-right"></Fa></h5></a>
                        </CardBody>
                    </Card>
            </Col>
            </Row> 
        </Container>
          

        )


    }

}


export default Restaurantes;