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
import { Link } from "react-scroll";
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
        const bgColor = {backgroundColor: '#2196F3'}
        return(
            <div className="mb-5">
                <Router>
                    <header>
                        <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
                            <MDBNavbarBrand href="/">
                                <strong className="black-text">
                                    <Link
                                    activeClass="active"
                                    to="Intro"
                                    spy={false}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                >
                                    Mirage Tech
                                </Link>
                                </strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem className="nav-section">
                                            <Link
                                                activeClass="active"
                                                to="Mision"
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                            >
                                                <MDBNavLink to="#">
                                                    Misión
                                                </MDBNavLink>
                                            </Link>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-section">
                                            <Link
                                            activeClass="active"
                                            to="Servicios"
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                        >
                                                <MDBNavLink to="#">
                                                    Servicios
                                                </MDBNavLink>
                                        </Link>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-section">
                                        <Link
                                            activeClass="active"
                                            to="Tecnologias"
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                        >
                                            <MDBNavLink to="#">
                                                Tecnologías
                                            </MDBNavLink>
                                        </Link>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-section">
                                            <Link
                                                activeClass="active"
                                                to="Opiniones"
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                            >
                                                <MDBNavLink to="#">
                                                    Opiniones
                                                </MDBNavLink>
                                            </Link>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-section">
                                            <Link
                                                activeClass="active"
                                                to="Nosotros"
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                            >
                                                <MDBNavLink to="#">
                                                    Nosotros
                                                </MDBNavLink>
                                            </Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="facebook-f"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="twitter"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="github"/></MDBNavLink>
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