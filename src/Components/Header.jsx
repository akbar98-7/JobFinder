import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import joblogoImg from '../Assets/logo.png'

const Header = () => {
    return (

        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
            <Container>

                <Navbar.Brand as={NavLink} to="/" className="fw-bold ">
                    <img src={joblogoImg} alt="" width={200} />
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-5 fw-bold fs-5 ">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            end
                            className="custom-nav"
                            style={{ color: "#003366", fontWeight: "500" }}

                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/jobs"
                            className="custom-nav"
                            style={{ color: "#003366", fontWeight: "500" }}

                        >
                            Find a Job
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/about"
                            className="custom-nav"
                            style={{ color: "#003366", fontWeight: "500" }}

                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/contact"
                            className="custom-nav"
                            style={{ color: "#003366", fontWeight: "500" }}

                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header
