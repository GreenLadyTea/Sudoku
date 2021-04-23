import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import { initialState } from './store';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <Grid matrix={initialState} />
      <Button digit={1} />
    </div>
  );
}

export default App;
