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
        const bgColor = {backgroundColor: 'white'}
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
                                    duration={500}
                                >
                                    Mirage Tech
                                </Link>
                                </strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem className="nav-section">
                                            <Link
                                                activeClass="active"
                                                to="Mision"
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                            >
                                                <MDBNavLink to="#" className="black-text">
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
                                                <MDBNavLink to="#" className="black-text">
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
                                            <MDBNavLink to="#" className="black-text">
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
                                                <MDBNavLink to="#" className="black-text">
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
                                                <MDBNavLink to="#" className="black-text">
                                                    Nosotros
                                                </MDBNavLink>
                                            </Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" className="black-text" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="twitter"  className="black-text" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="github" className="black-text" /></MDBNavLink>
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