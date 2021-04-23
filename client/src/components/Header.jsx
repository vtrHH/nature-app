import React from 'react';
// import { Link } from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, DropdownButton, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'

const Header = ({ user, onSignOut }) => {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="pt-3 pb-3">
    <Container>
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
    <Navbar.Toggle aria-controls='responsive-navbar-col'/>
    <Navbar.Collapse id='responsive-navbar-nav'>
    <>
    {user && (
      <>
    <Nav fill  variant="pills" className="mt-3 mx-auto order-0">
    <Nav.Item>
      <a className="mb-2 btn btn-primary" href="/observation/create" role="button">Create Observations</a>
      {/* <Nav.Link href="/observation/create">Create Observations</Nav.Link> */}      
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="mb-2" href="/forum">Whats that Bird?</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="mb-2"href="/organisations">Observatories</Nav.Link>      
    </Nav.Item>
    <Nav.Item>

    <Nav fill  variant="pills" className="mt-3 mx-auto order-0">
    <Dropdown >
    <DropdownButton
      variant="secondary"
      menuAlign={{ lg: 'right' }}
      title={user.username}
      id="dropdown-menu-align-responsive-2"
    >
        <Col><Image src={user.profilePicture} roundedCircle style={{width:40}}/></Col>
        <Dropdown.Item href={`/${user.role}/${user._id}`}>Your Profile</Dropdown.Item>
        <Dropdown.Item onClick={onSignOut}>Sign Out</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
    </DropdownButton>
    </Dropdown>
    </Nav>    
    </Nav.Item>
        </Nav>
      </>            
      ) || (
      <>

      <Nav fill  variant="pills" className="mt-3 mx-auto order-0">
    <Nav.Item>
      <Nav.Link href="/sign-in">Sign In</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/sign-up">Sign Up</Nav.Link>
    </Nav.Item>
      </Nav>
      </>
        )}
    </>
  </Navbar.Collapse>
  </Container>      
  </Navbar>   
  );
};

export default Header;
