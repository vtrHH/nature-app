import React, { Component } from 'react';
import { signIn } from './../services/authentication';
import {Form, Row, Button, Col, Container, Image} from 'react-bootstrap';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = await signIn({ email, password });
    this.props.onUserChange(user);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main>
        <>
        <Container className="mt-3" >
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
          <h1>Sign In</h1>
            </Col>
          </Row>  
        </Container>

        <Form className="mt-3" 
          onSubmit={this.handleFormSubmission}
          >
        <Container className="mt-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-0">
                <Form.Label htmlFor="email-input">Email address</Form.Label>
                <Form.Control 
                  id="email-input"
                  type="email"
                  placeholder="james@example.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              
            </Col>
          </Row>  
          <Row>  
            <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-0">
                <Form.Label htmlFor="password-input">Password</Form.Label>
                <Form.Control 
                  id="password-input"
                  type="password"
                  placeholder="A secure password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            {/* <button className="btn btn-primary">Sign In</button> */}
          <Button type="submit" variant="primary" size="lg" block>
            Sign In
          </Button>
              
            </Col>
          </Row>
        </Container>
        </Form>
        <Image src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" fluid />
        
        </>
      </main>
    );
  }
}      

export default SignIn;

