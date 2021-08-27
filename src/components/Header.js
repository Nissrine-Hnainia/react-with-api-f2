import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//Link tag instead of <a href="/"> </a>
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Link className="links" to="/"> Home </Link>
            <Link className="links" to="/users"> Users </Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
