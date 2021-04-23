import React from 'react';
import { digits } from '../../store';
import Button from '../Button/Button';

export default function Menu() {
  return (
    <>
      {digits.map(digit => (
        <Button key={digit} digit={digit} />
      ))}
    </>
  );
}
