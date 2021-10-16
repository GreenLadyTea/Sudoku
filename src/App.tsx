import React from 'react';
import './App.css';
import GoalsList from './components/GoalsList/GoalsList';
import InputForm from './components/InputForm/InputForm';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Цели</h1>
        <Filter />
        <InputForm />
        <GoalsList />
      </div>
    </>
  );
}
