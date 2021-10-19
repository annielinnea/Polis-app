import React from 'react';
import './App.css';
import './components/Gps/gps.jsx';
import Navbar from "./components/Navbar/Navbar";
import Slider from './components/Slider/Slider';
import EventCard from './eventCard/eventCard';
import Bgcolor from './bgcolor';





function App() {
  const images = [
    'https://images.unsplash.com/photo-1538115081112-32c7d8401807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1485056616736-b0840bdf4732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1782&q=80',
    'https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80',
    'https://images.unsplash.com/photo-1556474835-47da4fcf709c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'
  ]
  return (

    <React.Fragment>

      <center>

        <div className="container">

          <div className="App">

            <Navbar />
            
            <header>

              <Slider slides={images} autoPlay={5} />

            </header>
            <div className="PostItems">

              <EventCard />

            </div>
          </div>
        </div>
      </center>

    </React.Fragment>

  );
}

export default App;
