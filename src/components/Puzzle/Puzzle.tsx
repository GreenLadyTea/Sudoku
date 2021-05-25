import { useSelector } from 'react-redux';
import { ENDGAME_TYPES, MAXIMUM_AMOUNT_OF_ERRORS, State } from '../../store/store';
import Grid from '../Grid/Grid';
import Menu from '../Menu/Menu';
import ErrorCounter from '../ErrorCounter/ErrorCounter';
import React from 'react';

export default function Puzzle() {
  const isGameOver = useSelector((state: State) => state.gameIsOver);
  return (
    <>
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
            <ErrorCounter />
          </div>
        </>
      )}
    </>
  );
}
