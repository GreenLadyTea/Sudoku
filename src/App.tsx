import React from 'react';
import './App.css';
import { initialState } from './store';
import Cell from './components/Cell/Cell';

function App() {
  return (
    <div className="wrapper">
      <h1>Судоку</h1>
      <div className="grid-container">
        {initialState.map(row =>
          row.map((cell) => (
            <Cell key={cell.id} id={cell.id} value={cell.value} isChangeable={cell.isChangeable} isChecked={cell.isChecked}/>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
