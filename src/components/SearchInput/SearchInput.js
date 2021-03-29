import React from 'react';
import {StyledCheckbox} from './StyledInput'

export function SearchInput ({inline,label,type}) {

  return (
    
        <div>
          <StyledCheckbox inline={inline} label={label} type={type} />
        </div>
        
  )
}