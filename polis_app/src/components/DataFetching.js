import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import '../App.css';

//CategoryList
const {checkboxList} = require('./Navbar/Filter');


console.log("A test: ", checkboxList)

console.log("APIlengts: ", checkboxList.length)


//Constant objects 
const objects = {
  URL: "https://polisen.se/api/events?",
  APIlocation : "locationname",
  APItype: "typename"
}

// //Takes checkboxList and filters api
// function filter(api) {
//   let trueCheck = [{}]

//   if (checkboxList.values == true) {
//     trueCheck.push(check);
//   }

//   // for (let d = 0;checkboxList.length; d++){
//   //   if (checkboxList.values == true){
//   //     trueCheck.push(check);
//   //   }
//   // }

//   // console.log("trueCheck",trueCheck)

//   // for (let i = 0; i > checkboxList.length; i++) {
//   //   for (let g = 0; g == api.length; g++) {
//   //     if (checkboxList[i].Cname != api[g].type) {
//   //       console.log("APIsplice: ", api[g].type)
//   //       api = api.splice(g, -1)
//   //     }
//   //   }
//   // }

    
  
//   return api
// }


function DataFetching() {
  const [events, setEvents] = useState([])
  // input for url
  const [input, setInput] = useState([])


  //Fetches API directly from polise
  useEffect( () =>
    fetch(`${objects.URL}${objects.APIlocation}=${input}`)
      .then((response) => {
        console.log("Checkpoint A.1: ", 
          "status", response.status, 
          "statusText", response.statusText)
        response.text().then((data) =>{
          let api = JSON.parse(data)
          console.log("Checkpoint A.2: Status OK" )
          //API Filter
          // api = api.filter(filter)
          console.log("Controll: ",api)

          setEvents(api)
        }, (err) => {
          console.log("ERROR", err)
        });
      }), [input])
    
  console.log("A test: ", checkboxList)
  //Filters Search




//creates items/posts of event with properties
  return(
    <div >
      <center>
        <input placeholder="Enter location...  &#9740;" id="Search" className="SearchBar" type="text" value={input} onChange={e => setInput(e.target.value)} />
      </center>

      <div className="event-items">
          {events.map(event =>( 
          <div key={event.id} className="event-item">
              <img class="postImg" alt="Polis Scene"></img>
            <p className="event-title">
              <a href={"https://polisen.se/" +event.url}>
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
          ))
          }
      </div>
    </div>
  )
}

export default DataFetching
