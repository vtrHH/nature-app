import React, { Component } from 'react';

import { editOrganisation } from './../../services/organisation';

class UpdateOrganisationProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      phoneNumber: this.props.user.phoneNumber,
      organisationName: this.props.user.organisationName,
      street: this.props.user.street,
      houseNumber: this.props.user.houseNumber,
      city: this.props.user.city,
      postcode: this.props.user.postcode,
      description: this.props.user.description
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const data = {
      phoneNumber: this.state.phoneNumber,
      organisationName: this.state.organisationName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      city: this.state.city,
      postcode: this.state.postcode,
      description: this.state.description
    };
    await editOrganisation(data, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const organisation = this.state.organisation;
    return (
      <main>
        {organisation && (
          <>
            <header>Update Your Profile</header>
            <form onSubmit={this.handleFormSubmission}>
              <label htmlFor="input-organisationName">
                Organisation's Name
              </label>
              <input
                type="text"
                id="input-organisationName"
                name="organisationName"
                value={this.state.organisationName}
                placeholder={organisation.organisationName}
                onChange={this.handleInputChange}
              />

              <label htmlFor="input-street">Street</label>
              <input
                type="text"
                id="input-street"
                name="street"
                value={this.props.user.street}
                placeholder="please add your street"
                onChange={this.handleInputChange}
              />

              <label htmlFor="input-houseNumber">House number</label>
              <input
                type="text"
                id="input-houseNumber"
                name="houseNumber"
                value={this.props.user.houseNumber}
                placeholder="please add your houseNumber"
                onChange={this.handleInputChange}
              />
              <label htmlFor="input-city">City</label>
              <input
                type="text"
                id="input-city"
                name="city"
                value={this.props.user.city}
                placeholder="please add your city"
                onChange={this.handleInputChange}
              />
              <label htmlFor="input-postcode">Postcode</label>
              <input
                type="text"
                id="input-postcode"
                name="postcode"
                value={this.props.user.postcode}
                placeholder="please add your postcode"
                onChange={this.handleInputChange}
              />

              <label htmlFor="input-phoneNumer">Phone Number</label>
              <input
                type="text"
                id="input-phoneNumer"
                name="phoneNumber"
                value={this.props.user.phoneNumber}
                placeholder="please add your phone number"
                onChange={this.handleInputChange}
              />

              <label htmlFor="input-description">
                Description of your observatory
              </label>
              <input
                type="textarea"
                id="input-description"
                name="description"
                value={this.props.user.organisation}
                placeholder="please give us some information about your observatory "
                onChange={this.handleInputChange}
                cols="30"
                rows="5"
              />

              <button>Update your contact details</button>
            </form>
          </>
        )}
      </main>
    );
  }
}

export default UpdateOrganisationProfile;
