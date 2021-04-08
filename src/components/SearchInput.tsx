import React from 'react';

import { StyledCheckbox } from '../styled/StyledInput';

export const SearchInput: React.FC<{
  inline: Boolean;
  label: String;
  type: String;
  id: String;
  onChange(e: any): void;
  checked: Boolean;
  name: String;
  value: String;
}> = ({ inline, label, type, id, onChange, checked, name, value }) => {
  return (
    <div>
      <StyledCheckbox
        name={name}
        onChange={onChange}
        id={id}
        inline={inline}
        label={label}
        type={type}
        checked={checked}
      />
    </div>
  );
};
