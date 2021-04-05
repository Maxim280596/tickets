import React from 'react';

import {StyledCheckbox} from '../../styled/SearchInput/StyledInput'


export const SearchInput = ({inline,label,type, id , onChange, checked, key}) => {
  
    
  return (
    
        <div>
          <StyledCheckbox key={key} onChange={onChange} id={id} inline={inline} label={label} type={type} checked={checked} />
        </div>
        
  )
}