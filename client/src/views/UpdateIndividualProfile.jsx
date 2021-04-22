import React, { Component } from 'react';

import { editIndividual } from './../services/individual';

class UpdateIndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individual: this.props.user,
      firstName: '',
      lastName: '',
      aboutMe: '',
      profilePicture: ''
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const data = {
      firstName: this.state.phoneNumber,
      lastName: this.state.organisationName,
      aboutMe: this.state.street,
      profilePicture: this.state.profilePicture
    };
    const { firstName, lastName, aboutMe, profilePicture } = this.state;
    const body = new FormData();
    body.append('firstName', firstName);
    body.append('lastName', lastName);
    body.append('aboutMe', aboutMe);
    body.append('profilePicture', profilePicture);
    console.log(body)
    await editIndividual(body, this.state.individual._id);
    this.props.history.push('/');
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const file = files[0];
    this.setState({
      [name]: file
    });
  };

  render() {
    return (
      <main>
        <header>Update Your Profile</header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-firstName">First Name</label>
          <input
            type="text"
            id="input-firstName"
            name="firstName"
            placeholder="Your name"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-lastName">Last Name</label>
          <input
            type="text"
            id="input-lastName"
            name="lastName"
            placeholder="Your last name"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-aboutMe">About me</label>
          <input
            type="text"
            id="input-aboutMe"
            name="aboutMe"
            placeholder="Tell us about you"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-profilePicture">Profile picture</label>
          <input
            id="input-profilePicture"
            type="file"
            name="profilePicture"
            onChange={this.handleFileInputChange}
          />

          <button>Update your profile details</button>
        </form>
      </main>
    );
  }
}

export default UpdateIndividualProfile;
