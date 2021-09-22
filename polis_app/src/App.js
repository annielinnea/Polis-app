import logo from './logo.svg';
import './App.css';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h2>CrimeWatch</h2>
      </header>
      <DataFetching />
    </div>
  );
}

export default App;
