import React from 'react'
import globalValues from '../globalValues'
import { checkboxList, categoryName } from '../components/Navbar/Checkbox'

let [input, setInput] = []
let events = [];
let query = " "
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

  //Fetches API data
  componentDidUpdate() {
    //if statemnet stops infinite loop
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
            console.log("Checkpoint A.2: Status OK")
            //API Filter
            console.log("Controll: ", api)

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
      <div >
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
            {this.state.events.filter(event => event.type.includes(categoryName)).map(event => (
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
      </div >
    )
  }
}

export default EventCard