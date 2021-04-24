import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Col,
  Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

const Header = ({ user, onSignOut }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="../bird-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          EyeBird
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-col" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <>
            {user && user.role === 'individual' ? (
              <>
                <Nav
                  defaultActiveKey="/observations/create"
                  variant="pills"
                  className="mt-3 mx-auto order-0 text-center"
                >
                  <Nav.Item className="mr-3 ml-3 mb-3">
                    {/* <a className="btn btn-primary" href="/observation/create" role="button">Create Observations</a> */}
                    <Button href="/observation/create">Add Observations</Button>
                  </Nav.Item>
                  <Nav.Item className="mr-3 ml-3 mb-3">
                    <Nav.Link href="/forum">Whats that Bird?</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mr-3 ml-3 mb-3">
                    <Nav.Link href="/organisations">Observatories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mr-3 ml-3 mb-3">
                    <Nav fill variant="pills" className=" mx-auto order-0">
                      <Dropdown>
                        <DropdownButton
                          variant="outline-secondary"
                          menuAlign={{ lg: 'right' }}
                          title={user.username}
                          id="dropdown-menu-align-responsive-2"
                        >
                          <Col>
                            <Image
                              src={user.profilePicture}
                              roundedCircle
                              style={{
                                width: 40,
                                height: 40,
                                objectFit: 'cover'
                              }}
                            />
                          </Col>
                          <Dropdown.Item href={`/${user.role}/${user._id}`}>
                            Your Profile
                          </Dropdown.Item>
                          <Dropdown.Item onClick={onSignOut}>
                            Sign Out
                          </Dropdown.Item>
                        </DropdownButton>
                      </Dropdown>
                    </Nav>
                  </Nav.Item>
                </Nav>
              </>
            ) : user && user.role === 'organisation' ? (
              <Nav fill variant="pills" className=" mx-auto order-0">
                <Dropdown>
                  <DropdownButton
                    variant="outline-secondary"
                    menuAlign={{ lg: 'right' }}
                    title={user.username}
                    id="dropdown-menu-align-responsive-2"
                  >
                    <Col>
                      <Image
                        src={user.profilePicture}
                        roundedCircle
                        style={{
                          width: 40,
                          height: 40,
                          objectFit: 'cover'
                        }}
                      />
                    </Col>
                    <Dropdown.Item href={`/${user.role}/${user._id}`}>
                      Your Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onSignOut}>Sign Out</Dropdown.Item>
                  </DropdownButton>
                </Dropdown>
              </Nav>
            ) : (
              <>
                <Nav fill variant="pills" className="mt-3 mx-auto order-0">
                  <Nav.Item className="mr-3 ml-3 mb-3">
                    <Nav.Link href="/sign-in">Sign In</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mr-3 ml-3 mb-3">
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
