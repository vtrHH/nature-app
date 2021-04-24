import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { editOrganisation } from "./../../services/organisation";

class UpdateOrganisationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      phoneNumber: this.props.user.phoneNumber,
      organisationName: this.props.user.organisationName,
      street: this.props.user.street,
      houseNumber: this.props.user.houseNumber,
      city: this.props.user.city,
      postcode: this.props.user.postcode,
      description: this.props.user.description,
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const data = {
      phoneNumber: this.state.phoneNumber,
      organisationName: this.state.organisationName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      city: this.state.city,
      postcode: this.state.postcode,
      description: this.state.description,
    };
    await editOrganisation(data, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const organisation = this.state.organisation;
    return (
      <main>
        {organisation && (
          <>
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
                <Col md={{ span: 6, offset: 3 }} >
                  <Form className="mt-3" onSubmit={this.handleFormSubmission}>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-organisationName">
                        Organisation's Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="input-organisationName"
                        name="organisationName"
                        value={this.state.organisationName}
                        placeholder={organisation.organisationName}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-street">Street</Form.Label>
                      <Form.Control
                        type="text"
                        id="input-street"
                        name="street"
                        value={this.props.user.street}
                        placeholder="please add your street"
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-houseNumber">
                        House number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="input-houseNumber"
                        name="houseNumber"
                        value={this.state.houseNumber}
                        placeholder="please add your houseNumber"
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-city">City</Form.Label>
                      <Form.Control
                        type="text"
                        id="input-city"
                        name="city"
                        value={this.state.city}
                        placeholder="please add your city"
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-postcode">Postcode</Form.Label>
                      <Form.Control
                        type="text"
                        id="input-postcode"
                        name="postcode"
                        value={this.state.postcode}
                        placeholder="please add your postcode"
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-phoneNumer">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="input-phoneNumer"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        placeholder="please add your phone number"
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <br/>

                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="input-description">
                        Description of your observatory
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                    rows={3}
                    type="text"
                        id="input-description"
                        name="description"
                        value={this.props.user.organisation}
                        placeholder="Please give us some information about your observatory "
                        onChange={this.handleInputChange}
                        cols="30"
                        rows="5"
                      />
                    </Form.Group>
                    <br/>

                    <Button>Update your contact details</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
    );
  }
}

export default UpdateOrganisationProfile;
