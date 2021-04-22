import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import { initialState } from './store';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <Grid matrix={initialState} />
    </div>
  );
}

export default App;
