import React, {useEffect}  from "react";
import { useDispatch} from 'react-redux'
import { connect } from 'react-redux';

import { Ticket } from "../Ticket/Ticket";
import {fetchId} from '../../store/idReducer';
import {fetchTickets} from '../../store/ticketsReducer';


 const TicketsList = (props) => {
  // const [searchId, setSearchId] = useState("");
  // const [tickets, setTickets] = useState([]);

//  console.log(state.state.idReducer.searchId.searchId, 'hi')

// console.log(props)
const dispatch = useDispatch();


 
 useEffect(()=>{
   
dispatch(fetchId())
 
  
 }, [])

console.log(props.state)
 

//  useEffect(()=>{
   
// dispatch(fetchTickets(props.searchId.searchId))
//  console.log(props.searchId)
//  }, [props.searchId])  

//  console.log(state.state.idReducer.searchId.searchId)
 console.log(props, 'dssdfsddsd')

//  useEffect(()=>{
//   dispatch(fetchTickets(state.state.idReducer.searchId.searchId))
// }, [state.state.idReducer.searchId.searchId])

//  useEffect(()=>{
//    if(state.state.reducer.searchId) {
//   dispatch(putTickets())
//    }
//  }, [state.state.reducer.searchId, dispatch])
 


// console.log(props.store.reducer.data.searchId)
    
     
    
      

  // console.log(tickets);


  // console.log(searchId);

  return (
    <div>
      {/* {tickets.map((item) => (
        <Ticket
          key={item.price.toString()}
          price={item.price}
          origin={item.segments[0].origin}
          destination={item.segments[0].destination}
          originBack={item.segments[1].origin}
          destinationBack = {item.segments[1].destination}
          stops = {item.segments[0].stops.length}
          stopsBack = {item.segments[1].stops.length}
          stopsCity = {item.segments[0].stops.map((i) => (
            i
          )).join(', ')}
          stopsCityBack = {item.segments[1].stops.map((it) => (
            it
          )).join(', ')}
        />
      ))} */}
      <Ticket />
       
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    state: state
    // loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(TicketsList);


