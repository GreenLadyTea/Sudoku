import React from 'react';
import { DIGITS } from '../../store/store';
import Button from '../Button/Button';
import '../Button/Button.css';
import { useDispatch } from 'react-redux';
import { assignDigit } from '../../store/actions/actions';

export default function Menu() {
  const dispatch = useDispatch();
  return (
    <>
      {DIGITS.map(digit => (
        <Button key={digit} digit={digit} />
      ))}
      <div>
        <button
          data-testid="clear-button"
          onClick={() => {
            dispatch(assignDigit(0));
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
