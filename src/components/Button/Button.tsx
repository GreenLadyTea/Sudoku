import React from 'react';
import './Button.css';

type ButtonProps = {
  digit: number;
};

export default function Button({ digit }: ButtonProps) {
  return (
    <>
      <button data-testid="button">{digit}</button>
    </>
  );
}
