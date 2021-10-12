import React from 'react';
import './App.css';
import Goal from './components/Goal/Goal';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Цели</h1>
        <Goal id="1" name="Помыть посуду" date="21-09-2021" isCompleted={false} />
      </div>
    </>
  );
}
