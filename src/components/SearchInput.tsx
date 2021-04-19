import React from 'react';
import { Field } from 'formik';

import { StyledCheckbox } from '../styled/StyledInput';
import { Checkbox, SearchInputProps } from '../types';

export const SearchInput = ({ toggleCheckbox, name, options }: SearchInputProps) => (
  <Field
    name={name}
    render={(array: []) => (
      <div>
        {options.map((item: Checkbox) => (
          <StyledCheckbox
            key={item.id}
            onChange={() => toggleCheckbox(item)}
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

