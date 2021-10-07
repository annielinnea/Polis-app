import React from 'react';
import globalValues from '../../globalValues';


//Get users current position//
var options = {
  enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0
 };


 function success(pos) {
   var crd = pos.coords;

   console.log('Your current position is:');
   console.log(`Latitude : ${crd.latitude}`);
   console.log(`Longitude: ${crd.longitude}`); 
 }
 function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

class GPS extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }

  }


componentDidUpdate() {

}

render() {
return(
  <div className="event-items">
  <ui>
    {/* //creates cards with map() */}
    {this.state.events.filter(event => event.gps.includes([categoryName])).map(event => (
      <ol className="eventOL">
        <div
          key={event.id}
          className="event-item"
        >
          <img
            class="postImg"
            alt="Polis Scene"
          ></img>
          <p className="event-title">
            <a href={"https://polisen.se/" + event.url}>
              {event.name.split(',').slice(1)}
            </a>
          </p>
          <p className="event-date">
            {event.datetime}
          </p>
          <br />
          <p className="event-summary">
            {event.summary}
          </p>
        </div>
      </ol>
    ))
    }
  </ui>
</div>
)

}

}