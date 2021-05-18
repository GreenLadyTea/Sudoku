import React from 'react';
import './App.css';
import Puzzle from './components/Puzzle/Puzzle';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Судоку</h1>
        <Puzzle />
      </div>
    </>
  );
}
