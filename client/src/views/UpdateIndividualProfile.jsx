import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { editIndividual } from "./../services/individual";

class UpdateIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individual: this.props.user,
      firstName: "",
      lastName: "",
      aboutMe: "",
      profilePicture: "",
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { firstName, lastName, aboutMe, profilePicture } = this.state;
    const body = new FormData();
    body.append("firstName", firstName);
    body.append("lastName", lastName);
    body.append("aboutMe", aboutMe);
    body.append("profilePicture", profilePicture);
    console.log(body);
    await editIndividual(body, this.state.individual._id);
    this.props.history.push("/");
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    this.setState({
      [name]: file,
    });
  };

  render() {
    return (
      <main>
        <header>
          <Container className="mt-3">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="text-center">
                <h2>Update Your Profile</h2>
              </Col>
            </Row>
          </Container>
        </header>

        <Container className="mt-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handleFormSubmission}>
                <Form.Group className="mb-0">
                  <Form.Label htmlFor="input-firstName">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="input-firstName"
                    name="firstName"
                    placeholder="Your name"
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <br/>

                <Form.Group className="mb-0">
                  <Form.Label htmlFor="input-lastName">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="input-lastName"
                    name="lastName"
                    placeholder="Your last name"
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <br/>

                <Form.Group className="mb-0">
                  <Form.Label htmlFor="input-aboutMe">About me</Form.Label>
                  <Form.Control
                    type="text"
                    id="input-aboutMe"
                    name="aboutMe"
                    placeholder="Tell us about you"
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <br/>

                <Form.Group className="mb-0">
                  <Form.Label htmlFor="input-profilePicture">
                    Profile picture
                  </Form.Label>
                  <Form.Control
                    id="input-profilePicture"
                    type="file"
                    name="profilePicture"
                    onChange={this.handleFileInputChange}
                  />
                </Form.Group>
                <br/>
                <Button>Update your profile details</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default UpdateIndividualProfile;
