import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';

class OrganisationHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user
    };
  }

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
                    <h2>Welcome {organisation.username}</h2>
                  </Col>
                </Row>
              </Container>
              <Container fluid style={{ padding: 0 }}>
                <Image
                  style={{ width: '100%' }}
                  src={organisation.profilePicture}
                  alt={organisation.name}
                />
              </Container>
            </header>

            <br />
            <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  <h4>Your Account Settings</h4>
                  <p>
                    Name of your organisation: {organisation.organisationName}
                  </p>
                  <p>Email: {organisation.email}</p>
                  <p>
                    Adress: {organisation.street}{' '}
                    {organisation.houseNumber + ','} {organisation.postcode}{' '}
                    {organisation.city}{' '}
                  </p>
                  <p>Phone Number: {organisation.phoneNumber}</p>
                  <Link to={`/organisation/${organisation._id}`}>
                    <Button type="button">
                      Check out your current profile page
                    </Button>
                  </Link>
                  <br />
                  <hr></hr>
                  <br />
                  <h5>Update your profile page</h5>

                  <br />
                  <Link to={`/organisation/${organisation._id}/edit`}>
                    <Button size="sm" variant="outline-secondary" type="button">
                      Edit your profile details
                    </Button>
                  </Link>
                  <br />
                  <br />
                  <Link to={`/organisation/${organisation._id}/add-birds`}>
                    <Button size="sm" variant="outline-secondary" type="button">
                      Add birds
                    </Button>
                  </Link>
                  <br />
                  <br />
                  <Link to={`/organisation/${organisation._id}/add-pictures`}>
                    <Button size="sm" variant="outline-secondary" type="button">
                      Add pictures
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
    );
  }
}

export default OrganisationHome;
