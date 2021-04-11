import React from 'react';
import { FieldArray } from 'formik';
import { StyledCheckbox } from '../styled/StyledInput';

export const SearchInput = ({ toggleCheckbox, name, options }) => {
  return (
    <FieldArray
      render={(array) => (
        <div>
          {options.map((item) => (
            <StyledCheckbox
              key={item.id}
              onChange={() => toggleCheckbox(item)}
              name={name}
              type="checkbox"
              value={item.value}
              checked={item.checked}
              label={item.value}
              length={item.length}
            />
          ))}
        </div>
      )}
    />
  );
};
