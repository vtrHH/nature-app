import React, { Component } from 'react';

import { editOrganisation, editPicturesInOrganisation } from './../../services/organisation';

class UpdateOrganisationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      phoneNumber: '',
      organisationName: '',
      street: '',
      houseNumber: '',
      city: '',
      postcode: '',
      oneBird: '',
      birds: [], 
      pictures : ''

      //  pictures: ''
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const birds = this.state.birds
    birds.push(this.state.oneBird)
    this.setState({ birds })
    const data = {
      phoneNumber: this.state.phoneNumber,
      organisationName: this.state.organisationName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      city: this.state.city,
      postcode: this.state.postcode,
      birds: birds
    };
    const pictures = this.state.pictures
    const body = new FormData();
    for (let picture of pictures) {
      body.append('pictures', picture);
    }
    console.log(this.state);
    console.log(data);
    await editOrganisation(data, this.state.organisation._id);
    await editPicturesInOrganisation(body, this.state.organisation._id);
    this.props.history.push('/');
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const arrayOfFiles = [];
    for (const file of files) arrayOfFiles.push(file);
    this.setState({
      [name]: arrayOfFiles
    });
  };

  render() {
    return (
      <main>
        <header>Update Your Profile</header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-organisationName">Organisation's Name</label>
          <input
            type="text"
            id="input-organisationName"
            name="organisationName"
            placeholder="please add your organisation'ss name"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-street">Street</label>
          <input
            type="text"
            id="input-street"
            name="street"
            placeholder="please add your street"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-houseNumber">House number</label>
          <input
            type="text"
            id="input-houseNumber"
            name="houseNumber"
            placeholder="please add your houseNumber"
            onChange={this.handleInputChange}
          />
          <label htmlFor="input-city">City</label>
          <input
            type="text"
            id="input-city"
            name="city"
            placeholder="please add your city"
            onChange={this.handleInputChange}
          />
          <label htmlFor="input-postcode">Postcode</label>
          <input
            type="text"
            id="input-postcode"
            name="postcode"
            placeholder="please add your postcode"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-phoneNumer">Phone Number</label>
          <input
            type="text"
            id="input-phoneNumer"
            name="phoneNumber"
            placeholder="please add your phone number"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-bird">Add a bird</label>
          <input
            type="text"
            id="input-birds"
            name="oneBird"
            placeholder="add one bird id"
            onChange={this.handleInputChange}
          />

          <label htmlFor="input-pictures">Pictures</label>
          <input
            id="input-pictures"
            type="file"
            name="pictures"
            multiple
            onChange={this.handleFileInputChange}
          />

          <button>Update your profile details</button>
        </form>
      </main>
    );
  }
}

export default UpdateOrganisationProfile;
