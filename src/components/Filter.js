import { useDispatch } from 'react-redux';

import { StyledButtonFast, StyledButtonPrice } from '../styled/StyledFilter';
import {
  filteringFast, filteringPrice
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
      <StyledButtonPrice
        variant="primary"
        size="lg"
        name="price"
        onClick={filterPrice}
      >
        САМЫЙ ДЕШЕВЫЙ
      </StyledButtonPrice>
      <StyledButtonFast variant="primary" size="lg" 
      onClick={filterFast}
      >
        САМЫЙ БЫСТРЫЙ
      </StyledButtonFast>
    </div>
  );
};

export default Filter;