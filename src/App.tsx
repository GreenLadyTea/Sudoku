import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <Grid />
      <Menu />
    </div>
  );
}

export default App;
