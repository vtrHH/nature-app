import { Component } from 'react';
import { loadObservation, deleteObservation} from '../services/observation';
import { Link } from 'react-router-dom';

class DeleteIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      observation: null,
      deleted: false
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
      deleted: true
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
            <h1>Your observation was Deleted</h1>
          </>
        )) || (
          <>
            {observation && (
              <>
                {(observation.creator._id === this.state.user._id && (
                  <>
                    <h1>Are you sure you want to delete this observation?</h1>
                    <button type="button" onClick={this.deleteThisObservation}>
                      Yes, please
                    </button>
                    <Link to={`/observation/${observation._id}`}>
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
