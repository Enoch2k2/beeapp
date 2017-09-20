import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
        { props.signedIn ? <NavDropdown eventKey={3} title="Username" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Profile</MenuItem>
          <MenuItem eventKey={3.2}>Settings</MenuItem>
          <MenuItem eventKey={3.3}>Node List</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Log Out</MenuItem>
        </NavDropdown> : null}
        { !props.signedIn ? <NavItem><NavLink to="signup">Sign Up</NavLink></NavItem> : null }
        { !props.signedIn ? <NavItem><NavLink to="login">Log In</NavLink></NavItem> : null }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)};

function mapStateToProps(state){
  return {
    session: state.session
  }
}
export default connect(mapStateToProps)(Navigation);
