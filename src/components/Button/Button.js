import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    const { digit } = this.props;
    return (
      <>
        <button data-testid="button">{digit}</button>
      </>
    );
  }
}
