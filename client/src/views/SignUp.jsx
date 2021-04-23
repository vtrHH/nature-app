import React, { Component } from "react";
import { signUp } from "./../services/authentication";
import { Form, Row, Button, Col, Container } from "react-bootstrap";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    role: "",
    profilePicture: "",
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { username, email, password, role, profilePicture } = this.state;
    const body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("password", password);
    body.append("role", role);
    body.append("profilePicture", profilePicture);
    console.log(profilePicture);
    const user = await signUp(body);
    this.props.onUserChange(user);
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    this.setState({
      [name]: file,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <main>
        <Container className="mt-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Sign Up</h1>
            </Col>
          </Row>
        </Container>

        <Form className="mt-3" onSubmit={this.handleFormSubmission}>
          <Container className="mt-3">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group className="mb-0">
                  <Form.Label htmlFor="username-input">User Name</Form.Label>
                  <Form.Control
                    id="username-input"
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group className="mb-0">
                  <Form.Label htmlFor="email-input">Email</Form.Label>
                  <Form.Control
                    id="email-input"
                    type="email"
                    placeholder="email@email.com"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group className="mb-0">
                  <Form.Label htmlFor="role-input">
                    Are you an individual or an organisation?
                  </Form.Label>
                  <Form.Control
                    as="select"
                    id="role-input"
                    name="role"
                    required
                    value={this.state.role}
                    onChange={this.handleInputChange}
                  >
                    <option value="" disabled>
                      Individual or organisation?
                    </option>
                    <option value="individual">Individual</option>
                    <option value="organisation">Organisation</option>
                  </Form.Control>
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
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Example file input"
                    type="file"
                    name="profilePicture"
                    onChange={this.handleFileInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  className="mb-3 mt-3"
                  type="submit"
                  variant="primary"
                  size="lg"
                  block
                >
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </main>
    );
  }
}

export default SignUp;
