import { Component } from 'react';

import { searchLatLng } from '../../services/nominatim';

class GetGeoDataOfObservatory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.organisation,
      currentLocation: [0, 0]
    };
  }

  componentDidMount() {
    this.findLatLngOfOrganisation();
  }

  findLatLngOfOrganisation = async () => {
    if (this.props.organisation) {
      const { street, houseNumber, city } = this.state.organisation;
      const query = { street, houseNumber, city };
      const response = await searchLatLng(query);
      const lat = response.coordinates[1];
      const lng = response.coordinates[0];
      this.setState({
        currentLocation: [lat, lng]
      });
      this.props.whenLocationSearchtriggered(this.state.currentLocation);
    }
  };

  render() {
    return <> </>;
  }
}

export default GetGeoDataOfObservatory;
