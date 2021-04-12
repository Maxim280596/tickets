import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Formik, FormikProps, FormikHelpers } from 'formik';

import { filterTickets } from '../src/redux/ducks/ticketsReducer';
import { StyledForm } from '../styled/StyledSearch';
import { SearchInput } from './SearchInput';

const checkboxOptions = [
  { id: 1, path: '/', value: 'Все', checked: true, length: 10 },
  {
    id: 2,
    path: '/no_stops',
    value: 'Без пересадки',
    checked: false,
    length: 0,
  },
  { id: 3, path: '/one_stop', value: '1 пересадка', checked: false, length: 1 },
  {
    id: 4,
    path: '/two_stops',
    value: '2 пересадки',
    checked: false,
    length: 2,
  },
  {
    id: 5,
    path: '/three_stops',
    value: '3 пересадки',
    checked: false,
    length: 3,
  },
];

const Search: React.FC = (props) => {
  const history = useHistory();
  const [options, setOptions] = useState(checkboxOptions);
  const dispatch = useDispatch();

  const toggleCheckbox = (option: any) => {
    const updatedOptions = options.map((item) => {
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
          {(formik: any) => (
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
