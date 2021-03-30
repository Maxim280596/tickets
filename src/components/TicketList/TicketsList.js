import React, { useState, useEffect } from "react";
import { Ticket } from "../Ticket/Ticket";

export const TicketsList = () => {
  // const [searchId, setSearchId] = useState("");
  // const [tickets, setTickets] = useState([]);

  // useEffect(() => {
  //   const getId = async () => {
  //     await fetch("https://front-test.beta.aviasales.ru/search")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         // console.log(data)
  //         setSearchId(data.searchId);
  //       });
  //   };
  //   getId();
  // }, []);

  // useEffect(() => {
  //   const getTickets = async () => {
  //     await fetch(
  //       `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setTickets(data.tickets);
  //         // setSearchId(data.searchId)
  //         // console.log(tickets)
  //       });
  //   };
  //   getTickets();
  // }, [searchId]);

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
      {/* <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket /> */}
    </div>
  );
}
