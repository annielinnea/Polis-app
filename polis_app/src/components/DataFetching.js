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

  useEffect(() => {
    axios.get('https://polisen.se/api/events')
      .then(res => {
        console.log("this is res", res.data)
        setEvents(res.data)
        console.log("post data", events)
      })
      .catch(err => {
        console.log("ERROR", err)
      })
    }, [])

  return(
    <div>
        {events.map(event =>(
          <div key={event.id} style={{ marginTop: '60px',height:'120px', width: '100%', backgroundColor:'black', color:'white' }}>
          <span>{event.name}<ColoredLine color="black" /><br /><br /></span>
          <span>{event.summary}</span>
          </div>
        ))}
    </div>

  )

}

export default DataFetching
