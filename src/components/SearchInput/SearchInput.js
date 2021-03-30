import React from 'react';
import {StyledCheckbox} from '../../styled/SearchInput/StyledInput'


export const SearchInput = ({inline,label,type, id , onClick}) => {
  
    
  return (
    
        <div>
          <StyledCheckbox id={id} inline={inline} label={label} type={type} />
        </div>
        
  )
}