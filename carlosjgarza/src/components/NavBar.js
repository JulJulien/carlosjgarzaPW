import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/NavBar.css";
import "../styles/Global.css";

function NavBar(){
    return (
        <Navbar fixed="top" className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#intro" style={{ color: 'white', fontSize: '30px' }}>Carlos Garza</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#About" style={{fontSize: '20px' }}>About</Nav.Link>
                        <Nav.Link href="#Projects" style={{fontSize: '20px' }}>Projects</Nav.Link>
                        <Nav.Link href="#Resume" style={{fontSize: '20px' }}>Resume</Nav.Link>
                    </Nav> 
                    <Nav className="ml-auto">
                        <Nav.Link href="mailto:cjulgarza@gmail.com"><EmailIcon style={{display: 'flex', height : '100%', alignItems: 'center', fontSize: '40px' }} /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/carlosj-garza/"><LinkedInIcon style={{display: 'flex', height : '100%', alignItems: 'center',fontSize: '40px' }} /></Nav.Link>
                        <Nav.Link href="https://github.com/JulJulien"><GitHubIcon style={{display: 'flex', height : '100%', alignItems: 'center',fontSize: '40px' }} /></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
