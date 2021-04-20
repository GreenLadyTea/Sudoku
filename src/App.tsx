import React from 'react';
import './App.css';
import { initialState } from './store';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <div className="grid-container">
        {initialState.map(row => row.map((cell, index) => <div key={index}>{cell}</div>))}
      </div>
    </div>
  );
}

export default App;
