import React, { Component } from 'react';

import { editPicturesInOrganisation } from './../../services/organisation';

class AddPictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      pictures: ''
    };
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const pictures = this.state.pictures;
    const body = new FormData();
    for (let picture of pictures) {
      body.append('pictures', picture);
    }
    await editPicturesInOrganisation(body, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
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
        <header>
          <h2>Add Pictures</h2>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-pictures">Pictures</label>
          <input
            id="input-pictures"
            type="file"
            name="pictures"
            multiple
            onChange={this.handleFileInputChange}
          />

          <button>Add pictures</button>
        </form>
      </main>
    );
  }
}

export default AddPictures;
