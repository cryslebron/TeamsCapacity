import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/">Team Capacity</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <ReactBootStrap.Nav.Link href="/components/Reports">Previous Sprint</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="/components/Users">Users</ReactBootStrap.Nav.Link>
     </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;