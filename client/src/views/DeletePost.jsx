import { Component } from "react";
import { loadPost, deletePost, deleteCommentsByPost } from "../services/forum";
import { Link } from "react-router-dom";

import { Row, Button, Col, Container } from "react-bootstrap";

class DeleteIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      post: null,
      deleted: false
    };
  }

  async componentDidMount() {
    const post = await loadPost(this.props.match.params.id);
    this.setState({
      post,
    });
  }

  deleteThisPost = async () => {
    await deletePost(this.state.post._id);
    await deleteCommentsByPost(this.state.post._id);
    this.setState({
      deleted: true,
    });
  };

  render() {
    const post = this.state.post;
    const deleted = this.state.deleted;

    console.log(post);
    console.log(this.state.user);
    return (
      <main>
        {(deleted && (
          <>
            <Container className="mt-3">
              <Row>
                <Col className="text-center" md={{ span: 6, offset: 3 }}>
                  <h1>Your post was Deleted</h1>
                </Col>
              </Row>
            </Container>
          </>
        )) || (
          <>
            {post && (
              <>
                {(post.creator._id === this.state.user._id && (
                  <>
                    <Container className="mt-3">
                      <Row>
                        <Col
                          className="text-center"
                          md={{ span: 6, offset: 3 }}
                        >
                          <h3>Are you sure you want to delete this post?</h3>
                        </Col>
                      </Row>
                    </Container>
                    <Container className="mt-3">
                      <Row>
                        <Col className="text-center">
                          <Button type="button" onClick={this.deleteThisPost}>
                            Yes, please
                          </Button>
                          </Col>
                          <Col className="text-center">
                          <Link to={`/forum/${post._id}`}>
                            <Button variant="danger" type="button">No, thanks</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </>
                )) || (
                  <Container className="mt-3">
                    <Row>
                      <Col className="text-center" md={{ span: 6, offset: 3 }}>
                        <h1>
                          Since you are not the creator of this post, you´re not
                          allowed to delete it.
                        </h1>
                      </Col>
                    </Row>
                  </Container>
                )}
              </>
            )}
          </>
        )}
      </main>
    );
  }
}
export default DeleteIndividualProfile;
