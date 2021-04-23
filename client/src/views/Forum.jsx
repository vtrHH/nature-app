import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import PostList from "../components/PostList";
import { listOfPosts } from "../services/forum";

class Forum extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const posts = await listOfPosts();
    console.log(posts);
    this.setState({ posts });
  }

  render() {
    let posts = this.state.posts;
    return (
      <main>
        <Container className="mt-3">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 } }>
              <header>
                <h2>What is this bird?</h2>
                <p>Get your answers and help others here</p>
              </header>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {posts && (
                
                  <PostList posts={posts} />
                
              )}
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 }}>
              <Link className="btn btn-primary" to="/forum/newpost">Add a Question</Link>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Forum;
