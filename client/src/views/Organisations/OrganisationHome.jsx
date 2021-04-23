import { Component } from 'react';
import { Link } from 'react-router-dom';

class OrganisationHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user
    };
  }

  render() {
    const organisation = this.state.organisation;
    return (
      <main>
        {organisation && (
          <>
            <header>
              <h2>Welcome {organisation.username}</h2>
            </header>
            <img src={organisation.profilePicture} alt={organisation.name} />
            <br />
            <h2>Your Account Settings</h2>
            <p>Name of your organisation: {organisation.organisationName}</p>
            <p>Email: {organisation.email}</p>
            <p>
              Adress: {organisation.street} {organisation.houseNumber + ','}{' '}
              {organisation.postcode} {organisation.city}{' '}
            </p>
            <p>Phone Number: {organisation.phoneNumber}</p>
            <Link to={`/organisation/${organisation._id}`}>
              <button type="button">Check out your current profile page</button>
            </Link>

            <h2>Update your profile page</h2>

            <Link to={`/organisation/${organisation._id}/edit`}>
              <button type="button">Edit your contact details</button>
            </Link>
            <Link to={`/organisation/${organisation._id}/add-birds`}>
              <button type="button">Add birds</button>
            </Link>
            <Link to={`/organisation/${organisation._id}/add-pictures`}>
              <button type="button">Change your pictures</button>
            </Link>
          </>
        )}
      </main>
    );
  }
}

export default OrganisationHome;
