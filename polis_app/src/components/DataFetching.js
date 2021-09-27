import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import '../App.css';


const objects = {
  URL: "https://polisen.se/api/events?",
  APIlocation : "locationname",
  APItype: "typename"
}


function DataFetching() {
  const [events, setEvents] = useState([])
  // const query = {}
  const [input, setInput] = useState([])



  useEffect( () =>
    fetch(`${objects.URL}${objects.APIlocation}=${input}`)
      .then((response) => {
        console.log("Checkpoint A.1: ", 
          "status", response.status, 
          "statusText", response.statusText)
        response.text().then((data) =>{
          let api = JSON.parse(data)
          console.log("Checkpoint A.2: Status OK" )
          setEvents(api)
        }, (err) => {
          console.log("ERROR", err)
        });
      }), [input])
    

  console.log("Checkpoint B: ", events[0])


      //Old guide, I have now overcome it
  // useEffect(() => {
  //   axios
  //     .get(`${URL}${APIcat}=${pos}`)
  //     .then(res => {
  //       console.log("this is res", res.data)
  //       setEvents(res.data)
  //       console.log("post data", events)


  //     })
  //     .catch(err => {
  //       console.log("ERROR", err)
  //     })
  //   }, [pos])

  // for (let i = 0; i < events.length; i++) {
  //   if (events[i].type === input) {
  //     // Add item to it
  //     query.push({ value: events[i] });

  //     // Set state
  //     this.setState({ query });
      
  //   }else if( i <= events.length){
  //   console.log("QueryLog: ", query)}
  // }


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
