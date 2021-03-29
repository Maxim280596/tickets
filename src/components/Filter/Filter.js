import React from "react";
import { StyledButtonFast, StyledButtonPrice } from "./StyledFilter";

export function Filter() {
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
}
