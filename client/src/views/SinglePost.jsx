import { Component } from "react";
import { loadPost, loadComments, createComment } from "../services/forum";

import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import Slider from "../components/Slider/Slider";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      post: null,
      comments: null,
    };
  }

  async componentDidMount() {
    const post = await loadPost(this.props.match.params.id);
    const comments = await loadComments(post._id);

    this.setState({
      post: post,
    });
    if (comments.length > 0) {
      this.setState({
        comments: comments,
      });
    }
  }

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const text = this.state.text;
    const data = {
      text: text,
    };
    await createComment(this.state.post._id, data);
    const comments = await loadComments(this.state.post._id);
    this.setState({
      comments,
    });
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const post = this.state.post;
    const comments = this.state.comments;

    console.log(post);
    console.log(comments);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return (
      <main>
        {post && (
          <>
            <>
              <Container className="mt-3">
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <h3>{post.title}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <div className="post_item__user">
                      {post.creator.profilePicture ? (
                        <Image
                          roundedCircle
                          src={post.creator.profilePicture}
                          alt={post.creator.username}
                        />
                      ) : (
                        <Image
                          roundedCircle
                          src="https://source.unsplash.com/300x300/?smiling,woman"
                          alt={post.creator.username}
                        />
                      )}
                      <strong>{post.creator.username}</strong>
                    </div>
                    <small>
                      {new Date(post.addedDate).toLocaleDateString(
                        "en-GB",
                        options
                      )}
                    </small>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <Slider className="mt-3" pictures={post.pictures} />
                    <small>{post.text}</small>
                  </Col>
                </Row>
              </Container>
            </>
            {post.creator._id === this.state.user._id && (
              <>
                <Container className="mt-3">
                  <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                      <Button
                        href={`/forum/${post._id}/delete`}
                        className="btn btn-danger btn-sm"
                        type="button"
                      >
                        Delete this post
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </>
            )}
            {comments && (
              <>
                <Container className="mt-3">
                  {comments.map((comment) => (
                    <>
                      <Row>
                        <Col className="postItem mb-0" md={12}>
                          <div>
                            <div className="post_item__user">
                              {comment.creator.profilePicture ? (
                                <Image
                                  roundedCircle
                                  src={comment.creator.profilePicture}
                                  alt={comment.creator.username}
                                />
                              ) : (
                                <Image
                                  roundedCircle
                                  src="https://source.unsplash.com/300x300/?smiling,woman"
                                  alt={comment.creator.username}
                                />
                              )}
                              <strong>{comment.creator.username}</strong>
                            </div>
                            <div>
                              <small>
                                {" "}
                                {new Date(comment.addedDate).toLocaleDateString(
                                  "en-GB",
                                  options
                                )}
                              </small>
                              <p key={comment._id}>{comment.text}</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      {/* <small>{comment.creator.username}</small>
                    <small>
                      {" "}
                      {new Date(comment.addedDate).toLocaleDateString(
                        "en-GB",
                        options
                      )}
                    </small>
                    <p key={comment._id}>{comment.text}</p> */}
                    </>
                  ))}
                </Container>
              </>
            )}
            <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  <Form className="mt-3" onSubmit={this.handleFormSubmission}>
                      <h5>Can you help {post.creator.username}?{" "}</h5>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        id="input-text"
                        name="text"
                        placeholder="Type your idea"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        required
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary">Send</Button>
                      </InputGroup.Append>
                    </InputGroup>
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

export default SinglePost;
