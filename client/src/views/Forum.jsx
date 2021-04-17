import { Component } from 'react';
import { Link } from 'react-router-dom';

import PostList from '../components/PostList';
import { listOfPosts, createPost } from '../services/forum';

class Forum extends Component {
  state = {
    posts: null
  };

  async componentDidMount() {
    const posts = await listOfPosts();
    // console.log(this.state);
    this.setState({ posts });
  }

  render() {
    let posts = this.state.posts;
    return (
      <main>
        <header>
          <h1>What is this bird?</h1>
          <h2>Get your answers and help others here</h2>
        </header>
            {posts && (
            <div className="container--home">
                <PostList posts={posts} />
            </div>
            )}
        <>
          <Link to="/forum/newpost">Add a Question</Link>
        </>
      </main>
    );
  }
}

export default Forum;
