import React from 'react';
import { Field } from 'formik';

import { StyledCheckbox } from '../styled/StyledInput';

export const SearchInput: React.FC<{
  toggleCheckbox: any;
  name: String;
  options: any[];
}> = ({ toggleCheckbox, name, options }) => {
  return (
    <Field
      name={name}
      render={(array: any) => (
        <div>
          {options.map((item: any) => (
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
};
