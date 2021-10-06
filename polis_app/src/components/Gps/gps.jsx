import React from 'react';
import globalValues from '../../globalValues'

let events = [];


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

class GPS extends React.Component {
  constructor(props){
  super(props)
  this.state = {
   events: []
  };
}

  
}

export default GPS;



