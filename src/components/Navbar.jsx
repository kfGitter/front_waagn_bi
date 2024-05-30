import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import w_logo from '../images/w_logo.png';
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

function AppNavbar() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container className="navbar-container">

                <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                            src={w_logo}
                            width="200px"
                            height="200px"
                            className="logo-waagnbi"
                            alt="logo_waagn_bi"
                        />
                    </Navbar.Brand>
                </LinkContainer>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto custom-nav">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link-custom">Recettes</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/astuces">
                            <Nav.Link className="nav-link-custom">Astuces</Nav.Link>
                        </LinkContainer>

                        {/* <LinkContainer to="/">
                            <Nav.Link className="nav-link-custom">Cuisine du Monde</Nav.Link>
                        </LinkContainer> */}

                        <LinkContainer to="/food-science">
                            <Nav.Link className="nav-link-custom">Food Science</Nav.Link>
                        </LinkContainer>

                    </Nav>

                    <Nav className="login">
                        <LinkContainer to="/signup">
                            <FaUser style={{ fontSize: '20px' }} />
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
