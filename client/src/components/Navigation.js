import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import Home from '../containers/Home'
import '../css/NavBar.css'
const Navigation = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Logo</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
        <NavItem><NavLink to="#">Shop</NavLink></NavItem>
        { false ? <NavDropdown eventKey={3} title="Username" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Profile</MenuItem>
          <MenuItem eventKey={3.2}>Settings</MenuItem>
          <MenuItem eventKey={3.3}>Node List</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Log Out</MenuItem>
        </NavDropdown> : null}
        { true ? <NavItem><NavLink to="signup">Sign Up</NavLink></NavItem> : null }
        { true ? <NavItem><NavLink to="login">Log In</NavLink></NavItem> : null }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)};

export default Navigation;
