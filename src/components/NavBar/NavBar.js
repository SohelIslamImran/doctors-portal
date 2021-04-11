import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={(isSticky || isCollapsed) ? "slide in show shadow-sm bg-white py-3"
                : "slide out show py-4"}>

            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5"
                style={{ color: "#3a4256" }}>
                Doctor's <strong>Portal</strong>
            </Navbar.Brand>

            <Navbar.Toggle onClick={
                () => setCollapsed(!isCollapsed ? 'show' : null)}
                aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="mr-md-5" active>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="mr-md-5" active>About</Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/services"
                        className={(isSticky || isCollapsed) ? "mr-md-5" : "mr-md-5 text-white"} active>
                        Dental Services
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/reviews"
                        className={(isSticky || isCollapsed) ? "mr-md-5" : "mr-md-5 text-white"} active>
                        Reviews
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/blog"
                        className={(isSticky || isCollapsed) ? "mr-md-5" : "mr-md-5 text-white"} active>
                        Blog
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className={(isSticky || isCollapsed) ? "mr-md-5" : "mr-md-5 text-white"} active>
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;