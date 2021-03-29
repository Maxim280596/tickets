import React from 'react';
import {StyledCheckbox} from './StyledInput'

export function SearchInput ({inline,label,type, id}) {

  return (
    
        <div>
          <StyledCheckbox id={id} inline={inline} label={label} type={type} />
        </div>
        
  )
}