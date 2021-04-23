import React, { Component } from 'react';

import Search from '../../components/Search/Search';
import { editOrganisation } from './../../services/organisation';

class AddBirds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      birds: this.props.user.birds
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const birds = this.state.birds;
    const data = { birds: birds };
    await editOrganisation(data, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  };

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`);
    const birdsClone = [...this.state.birds];
    if (birdsClone.includes(result.id) !== true) {
      birdsClone.push(result.id);
      this.setState({
        birds: birdsClone
      });
    }
  };

  render() {
    return (
      <main>
        <header>
          <h2>Add Birds</h2>
          <Search
            content={'taxa'}
            onParent={(result) => this.handleResult(result)}
          />
          <form onSubmit={this.handleFormSubmission}>
            <button>Add bird to you observatory list</button>
          </form>
        </header>
      </main>
    );
  }
}

export default AddBirds;
