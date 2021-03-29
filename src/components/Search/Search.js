import React from "react";
import { StyledForm} from "./StyledSearch";
import {SearchInput} from '../SearchInput/SearchInput';

export function Search() {
  return (
    <StyledForm>
      <div>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <SearchInput inline label='Все' type ="checkbox" />
      <SearchInput inline label="Без пересадок" type="checkbox" />
      <SearchInput inline label="1 пересадка" type="checkbox" />
      <SearchInput inline label="2 пересадки" type="checkbox" />
      <SearchInput inline label="3 пересадки" type="checkbox" />
      </div>
    </StyledForm>
  );
}
