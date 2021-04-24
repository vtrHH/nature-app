import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Search from "../../components/Search/Search";
import { addBirdsInOrganisation } from "./../../services/organisation";

class AddBirds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      birds: this.props.user.birds,
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const birds = this.state.birds;
    const data = { birds: birds };
    console.log(data);
    await addBirdsInOrganisation(data, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  };

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`);
    let birdsClone = this.state.birds;
    if (this.state.birds === null) {
      birdsClone = [result.id];
      this.setState({
        birds: birdsClone,
      });
    } else if (birdsClone.includes(result.id) === false) {
      birdsClone.push(result.id);
      this.setState({
        birds: birdsClone,
      });
    }
  };

  render() {
    return (
      <main>
        <header>
          <Container className="mt-3">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="text-center">
                <h2>Add Birds</h2>
              </Col>
            </Row>
          </Container>

          <Search
            content={"taxa"}
            onParent={(result) => this.handleResult(result)}
          />
          <br/>
          <br/>
          <Container className="mt-3" className="text-center">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={this.handleFormSubmission}>
                  <Button>Add bird to you observatory list</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </header>
      </main>
    );
  }
}

export default AddBirds;
