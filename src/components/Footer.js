import React from "react";
import
{
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFooter, MDBIcon
} from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="white" className="font-small pt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>

                    <MDBCol md="8" className="text-center black-text p-5">
                        <h2 className="title">Mirage Tech</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Quod eos id officiis hic tenetur
                            quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Dolore cum accusamus eveniet
                            molestias voluptatum inventore laboriosam labore sit,
                            aspernatur praesentium iste impedit quidem dolor veniam.
                        </p>
                    </MDBCol>

                    <MDBCol md="4" className="text-center black-text p-5" fluid>
                        <div className="container-fluid p-2">
                            <h5 className='h4-responsive font-weight-bold text-center'>Contactos</h5>
                            <p>Miragetech@mail.com</p>
                            <div className='text-center'>
                                <a href="" className="mx-2">
                                    <MDBIcon fab icon='facebook-f' size="lg" className="blue-text"/>
                                </a>
                                <a href="" className="mx-2">
                                    <MDBIcon fab icon='twitter' size="lg" className="blue-text"/>
                                </a>
                                <a href="" className="mx-2">
                                    <MDBIcon fab icon='github' size="lg" className="dark-grey-text"/>
                                </a>
                                <a href="" className="mx-2">
                                    <MDBIcon fab icon='linkedin' size="lg" className="blue-text"/>
                                </a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className="black-text">
                    &copy; {new Date().getFullYear()} Copyright: <a href="" className="black-text font-weight-bold"> Mirage Tech </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;