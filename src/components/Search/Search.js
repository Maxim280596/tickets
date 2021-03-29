import React from "react";
import { StyledForm} from "./StyledSearch";
import {SearchInput} from '../SearchInput/SearchInput';
import {BrowserRouter as Router, Route} from 'react-router-dom';
export function Search() {
  return (
    <Router>
    <StyledForm>
      <div>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <SearchInput id='1' inline label='Все' type ="checkbox" />
      <SearchInput id='2' inline label="Без пересадок" type="checkbox" />
      <SearchInput id='3' inline label="1 пересадка" type="checkbox" />
      <SearchInput id='4' inline label="2 пересадки" type="checkbox" />
      <SearchInput id='5' inline label="3 пересадки" type="checkbox" />
      </div>
    </StyledForm>
    </Router>
  );
}
