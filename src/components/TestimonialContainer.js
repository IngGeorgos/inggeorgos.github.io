import React, {Component} from 'react';
import {
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdbreact';

class TestimonialContainer extends Component {
    render()
    {
        return(
            <MDBRow center>
                <MDBCol middle size="2" >
                    <MDBIcon icon="chevron-left" size="3x"/>
                </MDBCol>
                <MDBCol size="8">
                    {this.props.children}
                </MDBCol>
                <MDBCol middle size="2">
                    <MDBIcon icon="chevron-right" size="3x" />
                </MDBCol>
            </MDBRow>
        );
    }

};

export default TestimonialContainer;