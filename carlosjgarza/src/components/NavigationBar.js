import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/NavBar.css";

function NavigationBar() {
    return (
        <NavigationBar fixed="top" className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#intro">guegracie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                </Navbar.Collapse>
            </Container>
        </NavigationBar>
    );
}

export default NavigationBar;