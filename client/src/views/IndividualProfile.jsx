import { Component } from 'react';
import CarouselObservationsByUser from '../components/Carousel/CarouselObservationsByUser';
import CarouselPostsByUser from '../components/Carousel/CarouselPostsByUser';
import { loadIndividual } from '../services/individual';
import { Link } from 'react-router-dom';


class IndividualProfile extends Component {
  state = {
    individual: null,
    user: this.props.match.params.id
  };

  async componentDidMount() {
    // console.log(`Params ID is ${this.state.user}`)
    const individual = await loadIndividual(this.state.user);
    console.log(`Individual is ${individual}`);
    this.setState({ individual });
  }

  render() {
    const { individual } = this.state;
    return (
      <>
        {individual && (
          <main>
            <h1>Hello {individual.username}!</h1>
            <br />
            <img src={individual.profilePicture} alt={individual.username} />
            <br />
            <strong>{individual.firstName}{individual.lastName}</strong>
            <small>Username: {individual.username}</small>
            <p> {individual.aboutMe}</p>
            <br />

            <Link to={`/individual/${individual._id}/edit`}>
              <button type="button">Edit your profile page</button>
            </Link>

            <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>
              Latest Observations
            </h2>
            <CarouselObservationsByUser
              show={2}
              content={'observations'}
              user={this.state.individual}
            />
            <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>
              Latest Posts
            </h2>
            <CarouselPostsByUser
              show={2}
              content={'posts'}
              user={this.state.individual}
            />
          </main>
        )}
      </>
    );
  }
}

export default IndividualProfile;
