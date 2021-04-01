import React, {useEffect}  from "react";
import { useDispatch} from 'react-redux'
import { connect } from 'react-redux';
import { loadData, loadTickets } from "../../actions";
import { Ticket } from "../Ticket/Ticket";



 const TicketsList = (props) => {
  // const [searchId, setSearchId] = useState("");
  // const [tickets, setTickets] = useState([]);

 const dispatch = useDispatch();

 useEffect(()=>{
   
  dispatch(loadData())
  
 }, [dispatch])
//  useEffect(()=>{
//   if(props.store.reducer.data.searchId) {
//  dispatch(loadTickets(props.store.reducer.data.searchId))
//   } else {
//     console.log('error')
//   }
// }, [dispatch])

//  useEffect(()=>{
//   dispatch(loadTickets())
//  }, [])
 


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



export default connect(state => ({
  
    store: state
  
})) (TicketsList)
