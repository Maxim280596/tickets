import React, { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import {Formik} from 'formik'

import {
  filteringOneStop,
  filteringAllStop,
  filteringNoStop,
  filteringThreeStop,
  filteringTwoStop,
} from '../src/redux/ducks/ticketsReducer';
import { StyledForm } from '../styled/StyledSearch';
import { SearchInput } from './SearchInput';

interface ICheck
 {
  all: Boolean,
    no: Boolean,
    one: Boolean,
    two: Boolean,
    three: Boolean,
    
}



const Search:FunctionComponent = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState<ICheck>({
    all: false,
    no: false,
    one: false,
    two: false,
    three: false,
  });

  let history = useHistory();

  const handleChange = (e:any|Boolean): void => {
    history.push(`/${e.target.name}`);
    setState({
      ...state, [e.target.name]: e.target.checked
    });

    if (e.target.name === 'one') {
      dispatch(filteringOneStop());
    }
    if (e.target.name === 'two') {
      dispatch(filteringTwoStop());
    }
    if (e.target.name === 'three') {
      dispatch(filteringThreeStop());
    }
    if (e.target.name === 'all') {
      dispatch(filteringAllStop());
    }
    if (e.target.name === 'no') {
      dispatch(filteringNoStop());
    }
  };
  
  useEffect(() => {
    const { pathname } = history.location;
    setState({
      ...state,
      [pathname.substring(1)]: true,
    });
  }, []);

  return (
    <Router>
     <StyledForm>
        <div>
          <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <SearchInput
            name="all"
            onChange={handleChange}
            id="all"
            inline
            label="Все"
            type="checkbox"
            checked={state.all}
            value='all'
          />
          <SearchInput
            name="no"
            onChange={handleChange}
            id="no"
            inline
            label="Без пересадок"
            type="checkbox"
            checked={state.no}
            value='no'
          />
          <SearchInput
            name="one"
            onChange={handleChange}
            id="one"
            inline
            label="1 пересадка"
            type="checkbox"
            checked={state.one}
            value='one'
          />
          <SearchInput
            name="two"
            onChange={handleChange}
            id="two"
            inline
            label="2 пересадки"
            type="checkbox"
            checked={state.two}
            value='two'
          />
          <SearchInput
            name="three"
            onChange={handleChange}
            id="three"
            inline
            label="3 пересадки"
            type="checkbox"
            checked={state.three}
            value='three'
          />
        </div>
      </StyledForm>
    </Router>
  );
};

export default Search;