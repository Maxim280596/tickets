import { useDispatch } from 'react-redux';

import { StyledButtonFast, StyledButtonPrice } from '../styled/StyledFilter';
import {
  filteringFast,
  filteringPrice,
} from '../src/redux/ducks/ticketsReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const filterPrice = () => {
    dispatch(filteringPrice());
  };

  const filterFast = () => {
    dispatch(filteringFast());
  };

  return (
    <div>
      <StyledButtonPrice onClick={filterPrice}>САМЫЙ ДЕШЕВЫЙ</StyledButtonPrice>
      <StyledButtonFast onClick={filterFast}>САМЫЙ БЫСТРЫЙ</StyledButtonFast>
    </div>
  );
};

export default Filter;
