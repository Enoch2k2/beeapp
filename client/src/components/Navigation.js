import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Navigation = (props) => {
  return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Logo</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <NavItem eventKey={1} href="#">Shop</NavItem>
      { true ? <NavDropdown eventKey={2} title="Username" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Profile</MenuItem>
        <MenuItem eventKey={3.2}>Settings</MenuItem>
        <MenuItem eventKey={3.3}>Node List</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Log Out</MenuItem>
      </NavDropdown> : null}
      { false ? <NavItem eventKey={3} href="#">Sign Up</NavItem> : null }
      { false ? <NavItem eventKey={4} href="#">Log In</NavItem> : null }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)};

export default Navigation;
