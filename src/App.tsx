import React from 'react';
import './App.css';
import GoalsList from './components/GoalsList/GoalsList';
import InputForm from './components/InputForm/InputForm';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Цели</h1>
        <InputForm />
        <GoalsList />
      </div>
    </>
  );
}
