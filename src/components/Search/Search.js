import React from "react";
import { StyledForm, StyledCheckbox } from "./StyledSearch";

export function Search() {
  return (
    <StyledForm>
      <div>
        <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
        <div>
          <StyledCheckbox inline label="Все" type="checkbox" />
        </div>
        <div>
          <StyledCheckbox inline label="Без пересадок" type="checkbox" />
        </div>
        <div>
          <StyledCheckbox inline label="1 пересадка" type="checkbox" />
        </div>
        <div>
          <StyledCheckbox inline label="2 пересадки" type="checkbox" />
        </div>
        <div>
          <StyledCheckbox inline label="3 пересадки" type="checkbox" />
        </div>
      </div>
    </StyledForm>
  );
}
