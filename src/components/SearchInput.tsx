import React from 'react';
import { Field } from 'formik';

import { StyledCheckbox } from '../styled/StyledInput';

export const SearchInput: React.FC<{
  toggleCheckbox:any;
  name: String;
  options: { id: number; path: string; value: string; checked: boolean; length: number; }[];
}> = ({ toggleCheckbox, name, options }) => {
  return (
    <Field
      name={name}
      render={(array: []) => (
        <div>
          {options.map((item:{id: number; path: string; value: string; checked: boolean; length: number;}) => (
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
