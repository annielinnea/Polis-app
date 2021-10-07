import React from 'react';
import globalValues from '../../globalValues';
import { render } from "react-dom";
import { getDistance } from 'geolib';




let events = [];

class GPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isFetching: false,
      options: [{
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }]
    }

  }

  //Get users location & calcuate the distance between two locations//

  success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    var dis = getDistance(
      { latitude: crd.latitude, longitude: crd.longitude },
      { latitude: this.props.apiY, longitude: this.props.apiX }
    );
    console.log(`Distance\n\n${dis / 1000} KM`);
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  componentDidMount() {
    //Fetch data//

    this.setState({ ...this.state, isFetching: true });

    fetch(`${globalValues.URL}${globalValues.APIlocation}`)
      .then(response => response.json())
      .then(result => {
        this.setState({ events: result, isFetching: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });

      })
  };
  fetchEvents = this.componentDidMount

  render() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.state.options);

    return (
      <div>Hello</div>
    )
  }



}

render(<GPS />, document.getElementById("root"));

export default GPS 



