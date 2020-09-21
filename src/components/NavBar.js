import React from 'react';
import
{
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from 'mdbreact';
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgColor = {backgroundColor: '#2BA0FF'}
        return(
            <div className="mb-5">
                <Router>
                    <header>
                        <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
                            <MDBNavbarBrand href="/">
                                <strong>Mirage Tech</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#">Mision</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Servicios</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link
                                            activeClass="active"
                                            to="section1"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            Tecnologias
                                        </Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Testimonials</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Nosotros</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}

export default NavBar;