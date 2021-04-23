import { Component } from "react";

import { listOfObservations } from "../services/observation";

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

import BirdList from "../components/BirdList";
import Search from "../components/Search/Search";
import HomeMapView from "../components/Map/HomeMapView";
import CarouselObservations from "../components/Carousel/CarouselObservations";
import CarouselPosts from "../components/Carousel/CarouselPosts";

class Home extends Component {
  constructor(props) {
    super(props);
    // const { user } = props;
    // this.state = { ...user.preferences };

    this.state = {
      user: this.props.user,
      search: "",
      birds: [],
      observations: [],
    };
  }

  async componentDidMount() {
    const observations = await listOfObservations();
    this.setState({ observations });
  }
  // console.log(this.state.observations);

  updateSearch = (search) => {
    this.setState({
      search: search,
    });
    // this.triggerFiltering({
    //   search: search,
    //   stockCheck: this.state.stockCheck,
    // });
  };

  render() {
    let user = this.state.user;
    let birds = this.state.birds;
    console.log(user);

    return (
      <main>
        <header>
          <Jumbotron fluid className="jumbotron">
            <Container>
              {/* <div class="bg"></div> */}

              {(user && <h4>Hello! {user.username}</h4>) || <h4>Welcome!</h4>}
              <h1>Explore the latest birds</h1>
              <p>
                What bird is that? Consult our bird identification guide to ID
                mystery birds in the backyard and beyond. We have photos, song
                recordings, in-depth entries, and more to help bird watchers
                correctly identify the birds they spot.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Container>
          </Jumbotron>
        </header>
        <Container>
          <Row>
            <Col>
              <Search
                content={""}
                text={"Discover your favorite birds."}
                onParent={(result) => this.handleResult(result)}
              />
              <BirdList birds={birds} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 >Find observations close to you</h2>
              <p>
                You can either zoom within the map or just let us localize you
                by clicking the button below
              </p>
              <HomeMapView observations={this.state.observations} />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <h2 className="text-center"> Who´s that bird?</h2>
              <CarouselPosts show={2} content={"posts"} />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <h2 className="text-center"> Latest Observations</h2>
              <CarouselObservations show={2} content={"observations"} />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Home;
