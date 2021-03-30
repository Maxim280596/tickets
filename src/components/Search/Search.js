import React,{useState} from "react";
import { StyledForm} from "../../styled/Search/StyledSearch";
import {SearchInput} from '../SearchInput/SearchInput';
import {BrowserRouter as Router} from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
export const Search = () => {
 const [filterURL, setFilerURL] = useState('');
 const [checked, setChecked] = useState([]);


//  const handleToggle = (value) => {
//    const currentIndex = Checked.indexOf(value);
//    const newChecked = [...Checked];
//  }
  // let history = useHistory();
  // let value = useParams();
  // console.log(value)
  
  //   function handleCheckAll() {
  //     history.push("/all",setFilerURL(filterURL) );
      
      
  //   }
  //   function handleCheckNoStops() {
  //     history.push("/nostops");
  //   }
  
  // function handleCheckOneStops() {
  //   history.push("/onestop");
  // }
  // function handleCheckTwoStops() {
  //   history.push("/twostops");
  // }
  // function handleCheckThreeStops() {
  //   history.push("/threstops");
  // }
  return (
    <Router>
    <StyledForm>
      <div>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <SearchInput  id='1' inline label='Все' type ="checkbox" />
      <SearchInput  id='2' inline label="Без пересадок" type="checkbox" />
      <SearchInput  id='3' inline label="1 пересадка" type="checkbox" />
      <SearchInput  id='4' inline label="2 пересадки" type="checkbox" />
      <SearchInput   id='5' inline label="3 пересадки" type="checkbox" />
      </div>
    </StyledForm>
    </Router>
  );
}
