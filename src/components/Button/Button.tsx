import React from 'react';
import './Button.css';
import { useDispatch } from 'react-redux';
import { assignDigit } from '../../store';

type ButtonProps = {
  digit: string;
};

export default function Button({ digit }: ButtonProps) {
  const dispatch = useDispatch();
  return (
    <>
      <button data-testid="button" onClick={() => dispatch(assignDigit(digit))}>
        {digit}
      </button>
    </>
  );
}
