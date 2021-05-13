import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';
import ErrorCounter from './components/ErrorCounter/ErrorCounter';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <Grid />
      <Menu />
      <ErrorCounter />
    </div>
  );
}

export default App;
