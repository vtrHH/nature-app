import React from 'react';

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

export default function LandingPage() {
  return (
    <main>
        <header>
          <Jumbotron fluid className="jumbotron">
            <Container>

              <h4>Welcome!</h4>
              <h1>Explore the latest birds</h1>
              <p>
                What bird is that? Consult our bird identification guide to ID
                mystery birds in the backyard and beyond. We have photos, song
                recordings, in-depth entries, and more to help bird watchers
                correctly identify the birds they spot.
              </p>
              <p>
                <Button href="/sign-in" variant="primary">Sign In</Button>
              </p>
            </Container>
          </Jumbotron>
        </header>
      </main>
  )
}
