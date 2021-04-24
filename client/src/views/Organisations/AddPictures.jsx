import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { editPicturesInOrganisation } from "./../../services/organisation";

class AddPictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.user,
      pictures: "",
    };
  }

  componentDidMount() {
    console.log(this.state.organisation.pictures);
  }

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const pictures = this.state.pictures;
    const body = new FormData();
    for (let picture of pictures) {
      body.append("pictures", picture);
    }
    // const oldPictures = this.state.organisation.pictures.spit(',');
    //   const oldPictures = [];
    // this.state.organisation.pictures.map((picture) => {
    //     oldPictures.push(picture);
    //   });
    body.append("oldPictures", this.state.organisation.pictures);
    await editPicturesInOrganisation(body, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    console.log(files);
    const arrayOfFiles = [];
    for (const file of files) {
      console.log(file);
      arrayOfFiles.push(file);
    }
    this.setState({
      [name]: arrayOfFiles,
    });
  };
  render() {
    return (
      <main>
        <header>
          <Container className="mt-3">
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="text-center">
                <h2>Add Pictures</h2>
              </Col>
            </Row>
          </Container>
        </header>

        <Container className="mt-3" className="text-center">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handleFormSubmission}>
                <Form.Group>
                  <Form.Label htmlFor="input-pictures"></Form.Label>
                  <Form.Control style={{margin:'0 4em 2em'}}
                    id="input-pictures"
                    type="file"
                    name="pictures"
                    multiple
                    onChange={this.handleFileInputChange}
                  />
                </Form.Group>
                <Button type="submit">Add pictures</Button>
              </Form>
            </Col>
          </Row>
        </Container>
       
      </main>
    );
  }
}

export default AddPictures;
