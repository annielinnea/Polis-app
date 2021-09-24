import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import SearchFunction from './components/SearchFunction';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>

    
    <div className="App">
      <Navbar />
+      <header className="App-header">
      </header>

      <div className="PostItems">
        <DataFetching />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
