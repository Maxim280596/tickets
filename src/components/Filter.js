import React from 'react';

import { StyledButtonFast, StyledButtonPrice } from '../styled/StyledFilter';

export const Filter = () => {
  return (
    <div>
      <StyledButtonPrice variant="primary" size="lg">
        САМЫЙ ДЕШЕВЫЙ
      </StyledButtonPrice>
      <StyledButtonFast variant="primary" size="lg">
        САМЫЙ БЫСТРЫЙ
      </StyledButtonFast>
    </div>
  );
};
