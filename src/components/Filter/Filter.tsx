import { FILTER_TYPES, State } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { filter, search } from '../../store/actions/actions';
import React from 'react';

export default function Filter() {
  const options = [FILTER_TYPES.ALL, FILTER_TYPES.DONE, FILTER_TYPES.NOT_DONE];
  const searchBar = useSelector((state: State) => state.searchBar);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <label>
          Фильтр:
          <input
            type="text"
            data-testid="search-bar"
            value={searchBar}
            onChange={e => dispatch(search(e.target.value))}
          />
        </label>
        {options.map(item => (
          <a key={item} onClick={() => dispatch(filter(item))}>
            {item}{' '}
          </a>
        ))}
      </div>
    </>
  );
}
