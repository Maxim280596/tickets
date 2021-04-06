import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Ticket } from './Ticket';
import { fetchId } from '../store/idReducer';
import { fetchTickets } from '../store/ticketsReducer';

const TicketsList = (props) => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.idReducer.searchId.searchId);

  useEffect(() => {
    dispatch(fetchId());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(fetchTickets());
    };
  }, [searchId, dispatch]);

  return (
    <div>
      <Ticket />

      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
