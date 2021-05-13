import React from 'react';
import { assignDigit, digits } from '../../store';
import Button from '../Button/Button';
import '../Button/Button.css';
import { useDispatch } from 'react-redux';

export default function Menu() {
  const dispatch = useDispatch();
  return (
    <>
      {digits.map(digit => (
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
