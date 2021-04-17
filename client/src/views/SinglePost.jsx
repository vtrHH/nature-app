import { Component } from 'react';


class SinglePost extends Component {
  state = {
    post: null,
    comments: null
  };

  render() {
    return (
      <main>
          <h1>Title of the post</h1>
      </main>
    );
  }
}

export default SinglePost;