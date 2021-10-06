import React from 'react'
import globalValues from '../globalValues'
import { checkboxList, categoryName } from '../components/Navbar/Checkbox'
import filtering from './filter'

let events = [];
let query = 'onLoad'

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      input: ''
    }
    

    this.handleChange = this.handleChange.bind(this);
    // This binding is necessary to make `this` work in the callback
  }

  filterRecount(el){
      return el && el.type == categoryName
  }

  getSafe(fn) {
    try {
      return fn()
    } catch (e) {
      console.log(e)
      return undefined
    }
  }
  //Fetches API data
  componentDidUpdate() {
    
    //if statemnet stops infinite loop
    //Dont know why this works
    if (query !== this.state.input) {

      //REMOVE THIS FOR DEBUGGING
      console.clear()
      query = this.state.input
      //fetchesInputURL based on input
      fetch(`${globalValues.URL}${globalValues.APIlocation}=${query}`)
        .then((response) => {
          console.log("Checkpoint A.1: ",
            "status", response.status,
            "statusText", response.statusText)
          response.text().then((data) => {
            let api = JSON.parse(data)

            // testing
            api = api.slice(0, 50)
            // api = api && api.find(this.filterRecount)
            api = api.filter((a) => a.type.includes(categoryName))

            console.log("API_" && api)

            console.log("Checkpoint A.2: Status OK")
            this.setState({
              events: this.state.events = api,
              input: this.state.input = query
            })
            console.log("EVENTS; ", events)
          }, (err) => {
            console.log("ERROR", err)
          });
        })
    }
  }
  

  //Saves characters on searchbar
  handleChange(event) {
    console.log("EVENTvalue", event.target.value)
    this.setState({ input: event.target.value });
  }

  //creates items/posts of event with properties
  render() {
    return (
      <div onLoad={this.componentDidUpdate()}>
        <center>
          <input
            placeholder="Enter location...  &#9740;"
            id="Search"
            className="SearchBar"
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </center>
        <div
          className="event-items"
        >
          <ui>
            {/* //creates cards with map() */}
            {this.state.events.map(event => (
              <ol className="eventOL" key={event.id}>
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
      </div >
    )
  }
}

export default EventCard