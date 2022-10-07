import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const alertClick=()=>{
    alert("Hello Everyone");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Button width={100} onClick={alertClick}>
            <div>안녕?</div>
          </Button>
      </header>
    </div>
  );
}

export default App;
