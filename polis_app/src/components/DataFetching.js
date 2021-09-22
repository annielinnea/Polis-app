import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css';

import stockImg from "./Img/stockImg.jpg"


const URL = "https://polisen.se/api/events?";
const APIcat = "locationname"

function DataFetching() {
  const [events, setEvents] = useState([])
  const [pos, setPos] = useState([])



  useEffect(() => {
    axios
      .get(`${URL}${APIcat}=${pos}`)
      .then(res => {
        console.log("this is res", res.data)
        setEvents(res.data)
        console.log("post data", events)


      })
      .catch(err => {
        console.log("ERROR", err)
      })
    }, [pos])

    

  return(
    <div >
      <center>
        <input placeholder="Enter location...  &#9740;" className="SearchBar" type="text" value={pos} onChange={e => setPos(e.target.value)} />
      </center>
      <div className="event-items">
          {events.map(event =>(
          <div key={event.id} className="event-item">
              <img class="postImg"></img>
            <span className="event-title">
              <p id="postTitle">
                <a href={"https://polisen.se/" +event.url}>
                  {event.name.split(',').slice(1)}                 
                </a>
              </p>
              <p className="event-date">
                {event.datetime}
              </p>
                <br />
            </span>
            <span className="event-summary">
              <p>
                {event.summary}
              </p>
            </span>
          </div>
          ))
          }
      </div>
    </div>
  )
}

export default DataFetching
