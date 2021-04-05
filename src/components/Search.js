import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { StyledForm } from '../styled/StyledSearch';
import { SearchInput } from './SearchInput';

export const Search = () => {
  const [state, setState] = useState({
    all: false,
    no: false,
    one: false,
    two: false,
    three: false,
  });

  let history = useHistory();

const handleChange = (e) => {
  history.push(`/${e.target.name}`);
              setState({ [e.target.name]: !e.target.checked });
              console.log(state);
}

  return (
    <Router>
      <StyledForm>
        <div>
          <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <SearchInput
            name='all'
            onChange={handleChange}
            id="all"
            inline
            label="Все"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name='no'
            onChange={handleChange}
            id="no"
            inline
            label="Без пересадок"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name='one'
            onChange={handleChange}
            id="one"
            inline
            label="1 пересадка"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name='two'
            onChange={handleChange}
            id="two"
            inline
            label="2 пересадки"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name='three'
            onChange={handleChange}
            id="three"
            inline
            label="3 пересадки"
            type="checkbox"
            checked={state.id}
          />
        </div>
      </StyledForm>
    </Router>
  );
};
