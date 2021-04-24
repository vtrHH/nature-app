import { Component } from 'react';

import ErrorImage from '../assets/error.png';

class ErrorView extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Apologies, there was an unknown error.</h1>
          <img src={ErrorImage} alt="There was an error" />
        </header>
      </main>
    );
  }
}

export default ErrorView;
