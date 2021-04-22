import React from 'react';
// import { Link } from 'react-router-dom';
import {Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ user, onSignOut }) => {
  return (
    
    <Navbar bg="light" variant="light">
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
    <Nav className="mr-auto">
    <>
    {user && (
      <>
      <Nav.Link href="/observation/create">Create Observations</Nav.Link>
      <Nav.Link href="/forum">Whats that Bird?</Nav.Link>
      <Nav.Link href="/organisations">Observatories</Nav.Link>
      <Nav.Link href={`/${user.role}/${user._id}`}>{user.username}</Nav.Link>
      <Button onClick={onSignOut}>Sign Out</Button>
      </>            
      ) || (
      <>
      <Nav.Link href="/sign-in">Sign In</Nav.Link>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
      </>
        )}
    </>
        
    </Nav>
  </Navbar>   
  );
};

export default Header;