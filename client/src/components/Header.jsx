import React from 'react';
// import { Link } from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'

const Header = ({ user, onSignOut }) => {
  return (
    
    <Navbar className="pt-3 pb-3" navbar-expand-md bg="light" variant="light">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Eye Bird
    </Navbar.Brand>
    <>
    {user && (
      <>
    <Nav className="mx-auto order-0">
      <a class="btn btn-primary" href="/observation/create" role="button">Create Observations</a>
      {/* <Nav.Link href="/observation/create">Create Observations</Nav.Link> */}
      <Nav.Link href="/forum">Whats that Bird?</Nav.Link>
      <Nav.Link href="/organisations">Observatories</Nav.Link>
        {/* <Image src={user.profilePicture} roundedCircle /> */}
    </Nav>
    <Nav className="mr-sm-2" >
    <Dropdown >
    <DropdownButton
      variant="secondary"
      menuAlign={{ lg: 'right' }}
      title={user.username}
      id="dropdown-menu-align-responsive-2"
    >
        <Image src={user.profilePicture} roundedCircle style={{width:40}}/>
        <Dropdown.Item href={`/${user.role}/${user._id}`}>Your Profile</Dropdown.Item>
        <Dropdown.Item onClick={onSignOut}>Sign Out</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
    </DropdownButton>
    </Dropdown>
    </Nav>
      </>            
      ) || (
      <>

      <Nav >
      <Nav.Link href="/sign-in">Sign In</Nav.Link>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
      </Nav>
      </>
        )}
    </>
        
  </Navbar>   
  );
};

export default Header;
