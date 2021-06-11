import React, { Component } from 'react';
import Button from '../Button/Button';
import '../Button/Button.css';
import { DIGITS } from '../../store';

export default class Menu extends Component {
  render() {
    return (
      <>
        {DIGITS.map(digit => (
          <Button key={digit} digit={digit} />
        ))}
      </>
    );
  }
}
