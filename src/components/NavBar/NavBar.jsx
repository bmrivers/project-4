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
      <Nav.Item>
        <Nav.Link  href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav.Item>
    </>;
  

  return (
    <Navbar bg="light" className="Nav" variant="light tabs">
      <img src={cassette} style={{width: "70px"}} />
      {nav}
    </Navbar>
  );
}

export default NavBar;
// <div className="NavBar">
//   <span className='NavBar-welcome'>WELCOME </span>

//   <Link to='/login' className='NavBar-link'>LOG IN</Link>
//   &nbsp;&nbsp;|&nbsp;&nbsp;
//   <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
// </div>