import React from 'react';
import './App.css';
import './components/Gps/gps.jsx';
import DataFetching from './components/DataFetching';
import SearchFunction from './components/SearchFunction';
import Navbar from "./components/Navbar/Navbar";
import './components/SlideShow'
import Slideshow from './components/SlideShow';

function App() {
  return (
    <React.Fragment>

    
    <div className="App">
      <Navbar />
<<<<<<< Updated upstream
+      <header className="App-header">
=======
      <header>
        <Slideshow />
>>>>>>> Stashed changes
      </header>

      <div className="PostItems">
        <DataFetching />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
