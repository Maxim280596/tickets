import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { filterTickets } from '../redux/ducks/ticketsReduser';
import { StyledForm } from '../styled/StyledSearch';
import { SearchInput } from './SearchInput';
import { checkboxOptions } from '../constants';
import { Checkbox } from '../types';

const Search: React.FC = () => {
  const history = useHistory();
  const [options, setOptions] = useState(checkboxOptions);
  const dispatch = useDispatch();
  const toggleCheckbox = (option: { id: number }) => {
    const updatedOptions = options.map((item: Checkbox) => {
      if (item.id === option.id) {
        item.checked = !item.checked;
        dispatch(filterTickets(options));
        history.push(item.path);
      }
      if (item.checked && option.id !== item.id) {
        item.checked = false;
      }
      return item;
    });
    setOptions(updatedOptions);
  };

  return (
    <Router>
      <div>
        <Formik initialValues={checkboxOptions} onSubmit={() => {}}>
          {(formik: {}) => (
            <StyledForm>
              <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
              <SearchInput
                name="checkboxOptions"
                options={checkboxOptions}
                toggleCheckbox={toggleCheckbox}
              />
            </StyledForm>
          )}
        </Formik>
      </div>
    </Router>
  );
};

export default Search;
