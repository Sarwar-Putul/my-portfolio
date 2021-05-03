import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">S. M. SARWAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#skill">SKILL</Nav.Link>
                        <Nav.Link href="#resume">RESUME</Nav.Link>
                        <Nav.Link href="#project">PROJECT</Nav.Link>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        </div>
    );
};

export default Header;