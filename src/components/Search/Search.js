import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { StyledForm } from '../../styled/Search/StyledSearch';
import { SearchInput } from '../SearchInput/SearchInput';

export const Search = () => {

  const [state, setState] = useState({
    all: false,
    no: false,
    one: false,
    two: false,
    three: false,
  });

  let history = useHistory();

  return (
    <Router>
      <StyledForm>
        <div>
          <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <SearchInput
            name={1}
            onChange={(e) => {
              history.push(`/${e.target.id}`);
              setState({ all: !e.target.checked });
              console.log(state)
            }}
            id="all"
            inline
            label="Все"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name={2}
            onChange={(e) => {
              history.push(`/${e.target.id}`);
              setState({ no: !e.target.checked });
              console.log(state)
            }}
            id="no"
            inline
            label="Без пересадок"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name={3}
            onChange={(e) => {
              history.push(`/${e.target.id}`);
              setState({ one: !e.target.checked });
              console.log(state)
            }}
            id="one"
            inline
            label="1 пересадка"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name={4}
            onChange={(e) => {
              history.push(`/${e.target.id}`);
              setState({ two: !e.target.checked });
              console.log(state)
            }}
            id="two"
            inline
            label="2 пересадки"
            type="checkbox"
            checked={state.id}
          />
          <SearchInput
            name={5}
            onChange={(e) => {
              history.push(`/${e.target.id}`);
              setState({ three: !e.target.checked });
              console.log(state)
            }}
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
