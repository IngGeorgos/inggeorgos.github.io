import React, { Component } from 'react';
import
{
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse,
    MDBContainer,
    MDBHamburgerToggler
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
    state = {
        collapse1: false,
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render() {
        return (
            <Router>
                <div className="my-5">
                    <MDBNavbar color="blue lighten-2" light scrolling fixed="top" transparent>
                        <MDBContainer fluid>
                            <MDBNavbarBrand>
                                Mirage Tech
                            </MDBNavbarBrand>
                            <MDBHamburgerToggler color="cyan" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                            <MDBCollapse isOpen={this.state.collapse1} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#!">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Link</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Profile</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </div>
            </Router>
        );
    }
}

export default NavBar;