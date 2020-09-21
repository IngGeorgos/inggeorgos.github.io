import React, { Component } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardTitle,
    MDBCardGroup,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBIcon
} from "mdbreact";

class Services extends Component {
    render() {
        return (
            <div id="Servicios">
                <div className="divider-new">
                    <h2 className='h1-responsive blue-text font-weight-bold text-center'>Que servicios ofrecemos</h2>
                </div>

            <MDBCardGroup column deck>
                <MDBCard className="z-depth-2">
                        <MDBCardImage src={require("../images/WebApps.jpg")} top hover zoom
                                      alt="Web Apps"
                                      title="Desarrollo Web"
                                      className="img-fluid"
                                      waves={false}/>
                        <MDBCardBody className="text-center">
                            <MDBCardTitle tag="h5" className="blue-text">
                                <MDBIcon icon='globe' className='blue-text' /> Web Apps
                            </MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="blue" size="md">
                                Ver nuestros proyectos
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="z-depth-2">
                        <MDBCardImage src={require("../images/Sistemas.jpg")} top hover zoom
                                      alt="Gestion systems"
                                      title="Sistemas de gestion"
                                      className="img-fluid"
                                      waves={false}/>
                        <MDBCardBody className="text-center">
                            <MDBCardTitle tag="h5" className="pink-text">
                                <MDBIcon icon='chart-pie' className='pink-text' /> Sistemas de gestión
                            </MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="pink" size="md">
                                Ver nuestros proyectos
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="z-depth-2">
                        <MDBCardImage src={require("../images/iOSyAndroid.png")} top hover zoom
                                      alt="iOS and Android"
                                      title="Aplicaciones moviles"
                                      className="img-fluid"
                                      waves={false}/>
                        <MDBCardBody className="text-center">
                            <MDBCardTitle tag="h5" className="green-text">
                                <MDBIcon icon='mobile-alt' className='green-text' /> iOS y Android
                            </MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="green" size="md">
                                Ver nuestros proyectos
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
            </MDBCardGroup>
            </div>
        );
    }
}

export default Services;