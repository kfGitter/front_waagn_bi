import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import w_logo from '../images/w_logo.png';  // Correct relative path
import { FaUser } from "react-icons/fa";


function AppNavbar() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container className="navbar-container">
                <Navbar.Brand href="#home">
                    <img
                        src={w_logo}
                        width="200px"
                        height="200px"
                        className="logo-waagnbi"
                        alt="logo_waagn_bi"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto custom-nav">
                        <Nav.Link href="#recettes" className="nav-link-custom">Recettes</Nav.Link>
                        <Nav.Link href="#link" className="nav-link-custom">Astuces</Nav.Link>
                        <Nav.Link href="#link" className="nav-link-custom">Cuisine du Monde</Nav.Link>
                        <Nav.Link href="#link" className="nav-link-custom">Le Saviez-vous?</Nav.Link>
                    </Nav>

                    <Nav className="login">
                    <FaUser style={{ fontSize: '20px' }} /> 

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;

{/* 
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
    Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">
    Separated link
    </NavDropdown.Item>
</NavDropdown> 
*/}
