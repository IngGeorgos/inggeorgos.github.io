import React, {Component} from "react";
import
{
    MDBJumbotron,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBIcon
} from "mdbreact";

class AboutUs extends Component {
    render() {
        var bg = require('../images/bg.jpg')
        return (
            <div id="Intro">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }} className="z-depth-2">
                            <MDBCol className="text-white text-center py-5 px-4 my-5"
                                    style={{
                                        backgroundImage: "url("+bg+")"
                                    }}
                            >
                                <MDBCol className="py-5">
                                    <MDBCardTitle className="h1-responsive pt-3 font-bold">Mirage Tech</MDBCardTitle>
                                    <hr/>
                                    <p className="mx-5 mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                                    </p>
                                    <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Portfolio</MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default AboutUs;