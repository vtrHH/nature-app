import React, { Component } from 'react';
import { signIn } from './../services/authentication';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = await signIn({ email, password });
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
          <h1>Sign In</h1>
        </header>
        <div className="two-column-box">
          <div className="log-in-box">
            <form onSubmit={this.handleFormSubmission}>
              <label htmlFor="email-input">Email</label>
              <input
                id="email-input"
                type="email"
                placeholder="james@example.com"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />

              <label htmlFor="password-input">Password</label>
              <input
                id="password-input"
                type="password"
                placeholder="A secure password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />

              <button>Sign In</button>
            </form>
            <div id="sign-up-box">
              <p>
                If you don't have an account, <br/>
                <a href="/sign-up" className="form__a">
                  SIGN UP HERE.
                </a>
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              width="400"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default SignIn;
