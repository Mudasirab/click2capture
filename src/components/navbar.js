import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, } from 'react-bootstrap'
class NavBar extends React.Component {
    scrollFunc() {
        var navbar = document.getElementById("navSticky");

        if (window.pageYOffset >= 1) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunc);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunc);
    }

    render() {
        return (
            <Navbar id="navSticky" expand="lg" className="nav-my-style">

                <Navbar.Brand href="/">Click2Capture</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className="nav-align-style">
                    <Nav className="mr-sm-2 ">
                        <NavLink to="/" className="navLink_style">Home</NavLink>
                        <NavLink to="#team" className="navLink_style">Team</NavLink>
                        {/* <Nav.Link href="/team">Team</Nav.Link> */}
                        {/* <NavLink to="/photos" className="navLink_style">Photos</NavLink> */}
                        <Nav.Link href="#photos">Photos</Nav.Link>
                        <NavLink to="/contact" className="navLink_style">Contact</NavLink>
                        <NavLink to="/acc/ad_min/login" className="navLink_style">Login</NavLink>
                        <NavLink to="/uplad/upload-photos" className="navLink_style">Upload</NavLink>
                        <NavLink to="/blog" className="navLink_style">Blog</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavBar;