import { Col, Nav, Navbar, Row } from "react-bootstrap";
import './navbar.css';
import navIcon from '../../assets/img/nightIcon.svg';

export const NavBar = () => {
    return (
        <section className="header"> 
            <Row className="d-flex justify-content-center">
                <Col>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <div className="logo" data-content="<SS />" />
                        </Navbar.Brand>
                        <Navbar.Toggle id='navbar-toggler' aria-controls="basic-navbar-nav">
                            
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto navbar">
                                <Nav.Link href="#about-me">About</Nav.Link>
                                <Nav.Link href="#work">Work</Nav.Link>
                                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#night"><img src={navIcon} alt="Navigation night icon" /></Nav.Link>
                                <Nav.Link href="download">
                                    <button className="btn btn-light p-2">Download CV</button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </section>  
    )
}