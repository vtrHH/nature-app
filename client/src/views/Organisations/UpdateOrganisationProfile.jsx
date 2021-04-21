import React, { Component } from 'react';

import { editOrganisation } from './../../services/organisation';

class UpdateOrganisationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      phoneNumber: ''
      //  pictures: ''
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const phoneNumber = this.state.phoneNumber;
    await editOrganisation(this.state.organisation._id, phoneNumber);
    this.props.history.push('/');
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <header>Update Your Profile</header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-phoneNumer">Phone Number</label>
          <input
            type="text"
            id="input-phoneNumer"
            name="phoneNumber"
            placeholder="please add your phone number"
            onChange={this.handleInputChange}
          />

          <button>Update your profile details</button>
        </form>
      </main>
    );
  }
}

export default UpdateOrganisationProfile;
