import { Component } from 'react';
import { loadPost, createComment, loadComments } from '../services/forum';

class SinglePost extends Component {
  state = {
    post: null,
    comments: null
  };

  async componentDidMount() {
    const post = await loadPost(this.props.match.params.id);
    const comments = await loadComments(post._id);

    this.setState({
      post: post
    });
    if (comments.length > 0) {
      this.setState({
        comments: comments
      });
    }
  }

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const text = this.state.text;
    const data = {
      text: text
    };
    //const comments = await createComment(this.state.post._id, data);
    this.props.history.push(`/forum/${this.state.post._id}`);
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const post = this.state.post;
    const comments = this.state.comments;
    console.log(post);
    console.log(comments);
    return (
      <main>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </>
        )}

        {comments && (
          <>
            {comments.map((comment) => (
              <p key={comment._id}>
                {comment.text}
              </p>
            ))}
          </>
        )}
        <>
          <form onSubmit={this.handleFormSubmission}>
            <label htmlFor="input-text">Answer</label>
            <input
              type="text"
              id="input-text"
              name="text"
              placeholder="Type your answer"
              value={this.state.text}
              onChange={this.handleInputChange}
              required
            />
            <button>Add Answer</button>
          </form>
        </>
      </main>
    );
  }
}

export default SinglePost;
