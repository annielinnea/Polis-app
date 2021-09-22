import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import SearchFunction from './components/SearchFunction';



function App() {
  return (
    <React.Fragment>

    <div className="navbarTop">
      <nav>
        <h2 id="NavTitle">Brottsbevakning </h2>
        
      </nav>
    </div>
    <div className="App">
      <header className="App-header">

      </header>

      <div className="PostItems">
        <DataFetching />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
