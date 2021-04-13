import { Component } from 'react';
import { loadIndividual } from '../services/individual';

class IndividualProfile extends Component {
  state = {
    individual: null
  };

  async componentDidMount() {
      console.log(`Params ID is ${this.props.match.params.id}`)
    const individual = await loadIndividual(this.props.match.params.id);
    console.log(`Individual is ${individual}`)
    this.setState({ individual });
  }

  render() {
    const { individual } = this.state;
    return (
      <main>
        {individual && (
          <>
            <h1>{individual.name}</h1>
          </>
        )}
      </main>
    );
  }
}

export default IndividualProfile;