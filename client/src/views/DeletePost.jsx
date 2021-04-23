import { Component } from 'react';
import { loadPost, deletePost, deleteCommentsByPost  } from '../services/forum';
import { Link } from 'react-router-dom';

class DeleteIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      post: null
    };
  }

  async componentDidMount() {
    const post = await loadPost(this.props.match.params.id);
    this.setState({
      post: post,
      deleted: false
    });
  }

  deleteThisPost = async () => {
    await deletePost(this.state.post._id);
    await deleteCommentsByPost(this.state.post._id)
    this.setState({
      deleted: true
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
            <h1>Your post was Deleted</h1>
          </>
        )) || (
          <>
            {post && (
              <>
                {(post.creator._id === this.state.user._id && (
                  <>
                    <h1>Are you sure you want to delete this post?</h1>
                    <button type="button" onClick={this.deleteThisPost}>
                      Yes, please
                    </button>
                    <Link to={`/forum/${post._id}`}>
                      <button type="button">No, thanks</button>
                    </Link>
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
export default DeleteIndividualProfile;
