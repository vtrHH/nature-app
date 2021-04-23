import { Component } from 'react';
import { loadPost, loadComments, createComment } from '../services/forum';
import Slider from '../components/Slider/Slider';
import { Link } from 'react-router-dom';


class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      post: null,
      comments: null
    };
  }

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
    await createComment(this.state.post._id, data);
    const comments = await loadComments(this.state.post._id);
    this.setState({
      comments
    });
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
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return (
      <main>
        {post && (
          <>
            {console.log(post.creator._id, this.state.user._id)}
            <>
              <small>{post.creator.username}</small>
              <small>
                {new Date(post.addedDate).toLocaleDateString('en-GB', options)}
              </small>
              <h1>{post.title}</h1>

              <Slider pictures={post.pictures} />
              <p>{post.text}</p>
            </>
            {post.creator._id === this.state.user._id && (
              <>
                <Link to={`/forum/${post._id}/delete`}>
                  <button type="button">Delete this post</button>
                </Link>
              </>
            )}
            {comments && (
              <>
                {comments.map((comment) => (
                  <>
                    <small>{comment.creator.username}</small>
                    <small>
                      {' '}
                      {new Date(comment.addedDate).toLocaleDateString(
                        'en-GB',
                        options
                      )}
                    </small>
                    <p key={comment._id}>{comment.text}</p>
                  </>
                ))}
              </>
            )}
            <form onSubmit={this.handleFormSubmission}>
              <label htmlFor="input-text">
                Can you help {post.creator.username}?{' '}
              </label>
              <input
                type="text"
                id="input-text"
                name="text"
                placeholder="Type your idea"
                value={this.state.text}
                onChange={this.handleInputChange}
                required
              />
              <button>Send </button>
            </form>
          </>
        )}
      </main>
    );
  }
}

export default SinglePost;
