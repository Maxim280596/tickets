import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Ticket } from './Ticket';
import {
  asyncSendRequestAction,
  renderTickets,
} from '../src/redux/ducks/ticketsReducer';

const TicketsList = ({ state }: any) => {
  const dispatch = useDispatch();

  const { isLoaded, data, error }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncSendRequestAction());
    console.log(data);
  }, [dispatch, data]);

  useEffect(() => {
    return () => {
      if (isLoaded && data) {
        dispatch(renderTickets());
      }
    };
  }, [isLoaded, dispatch, data]);

  return (
    <div>
      {state.data ? (
        state.renderTickets.map((item: any) => {
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
        <h2>{error}</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state: state.mainReducer,
  };
};

export default connect(mapStateToProps, null)(TicketsList);
