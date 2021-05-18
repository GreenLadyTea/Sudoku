import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';
import ErrorCounter from './components/ErrorCounter/ErrorCounter';
import { useSelector } from 'react-redux';
import { ENDGAME_TYPES, MAXIMUM_AMOUNT_OF_ERRORS, State } from './store/store';

export default function App() {
  const isGameOver = useSelector((state: State) => state.gameIsOver);
  return (
    <>
      {isGameOver === ENDGAME_TYPES.WIN && (
        <>
          <div className="win">ПОБЕДА!</div>
        </>
      )}
      {isGameOver === ENDGAME_TYPES.FAIL && (
        <>
          <div className="fail">ПОРАЖЕНИЕ! Вы допустили {MAXIMUM_AMOUNT_OF_ERRORS} ошибок!</div>
        </>
      )}
      {isGameOver === ENDGAME_TYPES.GAME_IS_NOT_OVER && (
        <>
          <div className="wrapper">
            <h1>Судоку</h1>
            <Grid />
            <Menu />
            <ErrorCounter />
          </div>
        </>
      )}
    </>
  );
}
