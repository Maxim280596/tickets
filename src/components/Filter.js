import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { StyledButtonFast, StyledButtonPrice } from '../styled/StyledFilter';
import {filteringPrice, filteringFast} from '../store/ticketsReducer';
const Filter = ({tickets}) => {
const dispatch = useDispatch()
 
const filterPrice = () => {
  dispatch(filteringPrice())
}

const filterFast = () => {
  dispatch(filteringFast())
}

  return (
    <div>
      <StyledButtonPrice variant="primary" size="lg" name="price" onClick={filterPrice}  >
        САМЫЙ ДЕШЕВЫЙ
      </StyledButtonPrice>
      <StyledButtonFast variant="primary" size="lg" onClick={filterFast}>
        САМЫЙ БЫСТРЫЙ
      </StyledButtonFast>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
  tickets: state.ticketsReducer
}};

export default connect(mapStateToProps)(Filter)
