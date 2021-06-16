import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import { useSelector } from 'react-redux';
import { ENDGAME_TYPES, MAXIMUM_AMOUNT_OF_ERRORS, State } from './store/store';
import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';
import ErrorCounter from './components/ErrorCounter/ErrorCounter';
import ModeSwitcher from './components/ModeSwitcher/ModeSwitcher';

export default function App() {
  const isGameOver = useSelector((state: State) => state.gameIsOver);
  return (
    <>
      <div className="wrapper">
        <h1>Судоку</h1>
        <ErrorCounter /> <Timer />
        {isGameOver === ENDGAME_TYPES.WIN && (
          <>
            <div data-testid="puzzle" className="win">
              ПОБЕДА!
            </div>
          </>
        )}
        {isGameOver === ENDGAME_TYPES.FAIL && (
          <>
            <div data-testid="puzzle" className="fail">
              ПОРАЖЕНИЕ! Вы допустили {MAXIMUM_AMOUNT_OF_ERRORS} ошибок!
            </div>
          </>
        )}
        {isGameOver === ENDGAME_TYPES.GAME_IS_NOT_OVER && (
          <>
            <div data-testid="puzzle">
              <Grid />
              <Menu />
              Ручка
              <ModeSwitcher />
              Карандаш
            </div>
          </>
        )}
      </div>
    </>
  );
}
