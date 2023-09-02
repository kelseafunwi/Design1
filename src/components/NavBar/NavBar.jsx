import {Col, Nav, Navbar, Row } from "react-bootstrap";
import './navbar.css';
import navIcon from '../../assets/img/nightIcon.svg';
import { useEffect } from "react";

export const NavBar = () => {
    useEffect(() => {
        const navbarNav = document.getElementById('navbar');
        const navbarClicked = () => {
            if (navbarNav.getAttribute('aria-expanded') === 'false') {
                navbarNav.setAttribute('aria-expanded', 'true');
            } else  {
                navbarNav.setAttribute('aria-expanded', 'false');
            } 
        }
        const navbarToggler = document.getElementById('navbar-toggler');
        navbarToggler.addEventListener('click', navbarClicked);

        return () => navbarToggler.removeEventListener('click', navbarClicked);
     }, []);

    const toggleMode = () => {
        const body = document.body;
        body.classList.toggle('isDarkMode');
    }

    return (
        
       <Row className="d-flex  navbar-container fixed-top justify-content-center">
             <Col sm={10}>
                <Navbar id='navbar' aria-expanded='false' expand="lg">
                    <Navbar.Brand href="#home">
                        <div className="logo" data-content="<SS />" />
                    </Navbar.Brand>
                    <Navbar.Toggle id='navbar-toggler' aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar ms-auto">
                            <Nav.Link href="#about-me">About</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonial</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link onClick={() => toggleMode()}><img src={navIcon} alt="Navigation night icon" /></Nav.Link>
                            <Nav.Link href="download">
                                <button className="btn btn-light p-2">Download CV</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
       </Row>
    )
}