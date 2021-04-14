import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledButtonFast, StyledButtonPrice } from '../styled/StyledFilter';
import {
  filteringFast,
  filteringPrice,
} from '../redux/ducks/ticketsReduser';


const Filter = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(false);
  const [fast, setFast] = useState(false);
  const filterPrice = () => {
    dispatch(filteringPrice());
    setPrice(true);
    setFast(false);
  };

  const filterFast = () => {
    dispatch(filteringFast());
    setPrice(false);
    setFast(true);
  };

  return (
    <>
      <StyledButtonPrice onClick={filterPrice} active={price}>
        САМЫЙ ДЕШЕВЫЙ
      </StyledButtonPrice>
      <StyledButtonFast onClick={filterFast} active={fast}>
        САМЫЙ БЫСТРЫЙ
      </StyledButtonFast>
    </>
  );
};

export default Filter;
