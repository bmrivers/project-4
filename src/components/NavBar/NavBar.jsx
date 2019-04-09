import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
  // let nav = props.user ?
  //   <div>
  //     <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
  //     &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  //     <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
  //   </div>
  //   :
  //   <div>
  //     <Link to='/login' className='NavBar-link'>LOG IN</Link>
  //     &nbsp;&nbsp;|&nbsp;&nbsp;
  //     <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  //   </div>;

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          {props.user}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
// <div className="NavBar">
//   <span className='NavBar-welcome'>WELCOME </span>

//   <Link to='/login' className='NavBar-link'>LOG IN</Link>
//   &nbsp;&nbsp;|&nbsp;&nbsp;
//   <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
// </div>