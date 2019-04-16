import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import cassette from '../../images/cassette.png'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <>
  <Nav.Link id="welcome" disabled className='NavBar-welcome'>WELCOME, {props.user.name}!</Nav.Link>
      <Nav className="ml-auto">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/new">CREATE</Nav.Link>
        <Nav.Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Nav.Link>
      </Nav>
    </>
    :
    <>
      <Nav className="ml-auto">
        <Nav.Link  href="/login">LOGIN</Nav.Link>
        <Nav.Link href="/signup">SIGNUP</Nav.Link>
      </Nav>
    </>;
  

  return (
    <Navbar bg="light" className="Nav" variant="light tabs">
    <a href="/"><img alt="logo" src={cassette} style={{width: "70px"}} /></a>
      {nav}
    </Navbar>
  );
}

export default NavBar;
