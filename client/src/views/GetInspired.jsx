import { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { randomOrganisations } from '../services/organisation';
import OrganisationList from './../components/OrganisationList';

class GetInspired extends Component {
  state = {
    organisations: []
  };

  async componentDidMount() {
    const organisations = await randomOrganisations();
    this.setState({ organisations });
  }

  render() {
    let organisations = this.state.organisations;
    return (
      <main>
        <Container className="mt-3">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 }}>
              <header>
                <h3>Check out our registered organisations</h3>
                <p>
                  Get all details about their location and great birds to see
                  there
                </p>
              </header>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {organisations && (
                <OrganisationList organisations={organisations} />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default GetInspired;
