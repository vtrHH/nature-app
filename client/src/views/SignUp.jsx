import React, { Component } from 'react';
import { signUp } from './../services/authentication';

class SignUp extends Component {
  state = {
    username: '',   
    email: '',
    password: '',
    role: ''
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { username, email, password, role } = this.state;
    const user = await signUp({ username, email, password, role });
    this.props.onUserChange(user);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Sign Up</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="username-input">User Name</label>
          <input
            id="username-input"
            type="text"
            placeholder="username"
            name="username"
            required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          {/* <label htmlFor="firstname-input">First Name</label>
          <input
            id="firstname-input"
            type="text"
            placeholder="John"
            name="firstname"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="lastname-input">Last Name</label>
          <input
            id="lastname-input"
            type="text"
            placeholder="Doe"
            name="lastname"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          /> */}

          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="email@email.com"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="role-input">
            Are you an individual or an organisation?
          </label>
          <select
            id="role-input"
            name="role"
            required
            value={this.state.role}
            onChange={this.handleInputChange}
          >
            <option value="" disabled>
              Individual or organisation?
            </option>
            <option value="individual">Individual</option>
            <option value="shelter">Organisation</option>
          </select>

          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            placeholder="A secure password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default SignUp;
