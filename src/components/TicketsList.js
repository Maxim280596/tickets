import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Ticket } from './Ticket';
import { fetchId } from '../src/redux/ducks/idReducer';
import { fetchTickets, renderTickets } from '../src/redux/ducks/ticketsReducer';

const TicketsList = ({ state }) => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.idReducer.searchId);
  const loading = useSelector((state) => state.ticketsReducer.loadingFinish);

  useEffect(() => {
    dispatch(fetchId());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(fetchTickets());
    };
  }, [searchId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(renderTickets());
    };
  }, [loading, dispatch]);

  console.log(state.loadingFinish && state?.tickets[0].tickets);
  return (
    <div>
      {state.loadingFinish ? (
        state.renderTickets.map((item) => {
          console.log();
          return (
            <Ticket
              key={uuidv4()}
              price={item.price}
              origin={item.segments[0].origin}
              destination={item.segments[0].destination}
              originBack={item.segments[1].origin}
              destinationBack={item.segments[1].destination}
              stops={item.segments[0].stops.length}
              stopsBack={item.segments[1].stops.length}
              stopsCity={item.segments[0].stops.join()}
              stopsCityBack={item.segments[1].stops.join()}
              departureDate={item.segments[0].date}
              duration={item.segments[0].duration}
              departureDateBack={item.segments[1].date}
              durationBack={item.segments[1].duration}
            />
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.ticketsReducer,
  };
};

export default connect(mapStateToProps, null)(TicketsList);
