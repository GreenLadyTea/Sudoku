import { FormEvent, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../store/actions/actions';

export default function InputForm() {
  const [textField, setTextField] = useState('');
  const [dateField, setDateField] = useState('2021-10-10T00:00');
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(add({ name: textField, date: dateField }));
  }

  return (
    <>
      <input
        data-testid="text"
        type="text"
        value={textField}
        onChange={e => setTextField(e.target.value)}
      />
      <input
        data-testid="date"
        type="datetime"
        value={dateField}
        onChange={e => setDateField(e.target.value)}
      />
      <button data-testid="button" onClick={e => handleSubmit(e)} />
    </>
  );
}
