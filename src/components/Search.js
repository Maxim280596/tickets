import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import { StyledForm } from '../styled/StyledSearch';
import { SearchInput } from './SearchInput';

 const Search = ({tickets}) => {
  const [state, setState] = useState({
    all: false,
    no: false,
    one: false,
    two: false,
    three: false,
  });

  let history = useHistory();



  const handleChange = (e) => {
    // history.push(`/${e.target.name}`);
    setState({
      ...state, 
      [e.target.name]: e.target.checked 
      
    });
      if (e.target.name === 'no') {
        let price = tickets.tickets[0].tickets;
        price.sort(function(a,b){
          return b.price - a.price
        })
         console.log(tickets.tickets[0].tickets, 'filter')
         console.log(price, 'filtered')
    }
    
  
   
    
  };

  // useEffect(() => {
  //   const { pathname } = history.location;
  //   setState({
  //     [pathname.substring(1)]: true
  //   });


  // }, []);

  // useEffect(() => {

  //       console.log(tickets.loadingFinish)
  //         console.log('sddsfdsfsd')
        
  //     // console.log(tickets.loadingFinish, 1234)
    


  // }, [tickets.loadingFinish]);



  return (
    <Router>
      <StyledForm>
        <div>
          <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <SearchInput
            name="all"
            onChange={handleChange}
            id="all"
            inline
            label="Все"
            type="checkbox"
            checked={state.all}
          />
          <SearchInput
            name="no"
            onChange={handleChange}
            id="no"
            inline
            label="Без пересадок"
            type="checkbox"
            checked={state.no}
          />
          <SearchInput
            name="one"
            onChange={handleChange}
            id="one"
            inline
            label="1 пересадка"
            type="checkbox"
            checked={state.one}
          />
          <SearchInput
            name="two"
            onChange={handleChange}
            id="two"
            inline
            label="2 пересадки"
            type="checkbox"
            checked={state.two}
          />
          <SearchInput
            name="three"
            onChange={handleChange}
            id="three"
            inline
            label="3 пересадки"
            type="checkbox"
            checked={state.three}
          />
        </div>
      </StyledForm>
    </Router>
  );
};


const mapStateToProps = (state) => {
  return{
  tickets: state.ticketsReducer
}};

export default connect(mapStateToProps)(Search)