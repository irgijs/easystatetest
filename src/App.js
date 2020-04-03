import React from 'react';
import './App.css';
import CountDisplay from './CountDisplay';
import CounterButton from './CounterButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDisplay />
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
