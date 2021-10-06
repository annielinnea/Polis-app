<<<<<<< HEAD
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
=======
// import { getDistance } from 'geolib';



// //Get users current position//
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
>>>>>>> 2df85e374335cddce27143d0578ffa744ca878ce

// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`); 
// }


// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }


<<<<<<< HEAD
navigator.geolocation.getCurrentPosition(success, error,  options);
=======
// //Calculate distance between two coordinates//
// function calculateDistance(pos) {

//     var crd = pos.coords;
//     var dis = getDistance(
//       { latitude: crd.latitude, longitude: crd.longitude},
//       { latitude: 56.0045345, longitude: 12.3231 }
//     );
//     console.log(`Distance\n\n${dis / 1000} KM`);
//   };

// navigator.geolocation.getCurrentPosition(calculateDistance, success, error,  options);
>>>>>>> 2df85e374335cddce27143d0578ffa744ca878ce
