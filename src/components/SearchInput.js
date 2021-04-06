import React from 'react';

import { StyledCheckbox } from '../styled/StyledInput';

export const SearchInput = ({
  inline,
  label,
  type,
  id,
  onChange,
  checked,
  key,
  name,
}) => {
  return (
    <div>
      <StyledCheckbox
        name={name}
        key={key}
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
