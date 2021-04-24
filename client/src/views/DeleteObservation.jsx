import { Component } from "react";
import { loadObservation, deleteObservation } from "../services/observation";
import { Link } from "react-router-dom";

import { Row, Button, Col, Container } from "react-bootstrap";

class DeleteObservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      observation: null,
      deleted: false,
    };
  }

  async componentDidMount() {
    const observation = await loadObservation(this.props.match.params.id);
    this.setState({
      observation,
    });
  }

  deleteThisObservation = async () => {
    await deleteObservation(this.state.observation._id);
    this.setState({
      deleted: true,
    });
  };

  render() {
    const observation = this.state.observation;
    const deleted = this.state.deleted;

    console.log(observation);
    console.log(this.state.user);
    return (
      <main>
        {(deleted && (
          <>
            <Container className="mt-3">
              <Row>
                <Col className="text-center" md={{ span: 6, offset: 3 }}>
                  <h1>Your observation was Deleted</h1>
                </Col>
              </Row>
            </Container>
          </>
        )) || (
          <>
            {observation && (
              <>
                {(observation.creator._id === this.state.user._id && (
                  <>
                    <Container className="mt-3">
                      <Row>
                        <Col
                          className="text-center"
                          md={{ span: 6, offset: 3 }}
                        >
                          <h3>
                            Are you sure you want to delete this observation?
                          </h3>
                        </Col>
                      </Row>
                    </Container>
                    <Container className="mt-3">
                      <Row>
                        <Col className="text-center">
                          <Button
                            variant="danger"
                            type="button"
                            onClick={this.deleteThisObservation}
                          >
                            Yes, please
                          </Button>
                        </Col>
                        <Col className="text-center">
                          <Link to={`/observation/${observation._id}`}>
                            <Button variant="dark" type="button">No, thanks</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </>
                )) || (
                  <h1>
                    Since you are not the creator of this post, you´re not
                    allowed to delete it.
                  </h1>
                )}
              </>
            )}
          </>
        )}
      </main>
    );
  }
}
export default DeleteObservation;
