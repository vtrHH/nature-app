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
            <img
              src={organisation.profilePicture}
              alt={organisation.name}
              width="100em"
            />
            <br />
            <h2>Your Account Settings</h2>
            <p>Email: {organisation.email}</p>
            <p>Contact Person: </p>
            <p>Adress: </p>
            <p>Phone Number: </p>
            <Link to={`/organisation/${organisation._id}`}>
              <button type="button">Check out your current profile page</button>
            </Link>
            <Link to={`/organisation/${organisation._id}/edit`}>
              <button type="button">Edit your profile page</button>
            </Link>
            <Link to={`/organisation/${organisation._id}`}>
              <button type="button">Update your profile settings</button>
            </Link>
          </>
        )}
      </main>
    );
  }
}

export default OrganisationHome;
