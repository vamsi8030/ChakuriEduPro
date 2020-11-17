import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    return(
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Link to={"/Chakuri"} className="btn">Chakuri</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to={"/Search"} className="btn">SEARCH JOBS</Link>
                    <Link to={"/About"} className="btn">ABOUT US</Link>
                    <Link to={"/Contact"} className="btn">CONTACT US</Link>
                    </Nav>
                    <Nav inline>
                        <Button variant="outline-light">Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

};

export default NavigationBar;