import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import background from '/home/itsimo/api-testing/src/components/Img/images.jpg'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

function DataFetching() {
  const [events, setEvents] = useState([])
  const [pos, setPos] = useState(1)

  useEffect(() => {
    axios
      .get(`https://polisen.se/api/events?locationname=${pos}`)
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
    <div class="event-item">
      <div>
         <input type="text" value={pos} onChange={e => setPos(e.target.value)}/>
        {events.map(event =>(
          <div key={event.id} style={{ marginTop: '40px',height:'160px', width: '100%', backgroundColor:'#282c34', color:'white' }}>
          <span class="event-title"><h3>{event.name}</h3><br /></span>
          <span class="event-summary"><p>{event.summary}</p></span>
          </div>
        ))}
      </div>
    </div>

  )

}

export default DataFetching
