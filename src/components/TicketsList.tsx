import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector, ConnectedProps } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Ticket } from './Ticket';
import {
  asyncSendRequestAction,
  renderTicket,
} from '../redux/ducks/ticketsReduser';
import { TicketsMap,RootState, RootStates } from '../types';
interface Props extends PropsFromRedux {
  isLoaded: boolean;
  data: [];
  renderTickets: [];
  error: string;
}

const TicketsList = (props: Props) => {
  const dispatch = useDispatch();
  const { isLoaded, data } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(asyncSendRequestAction());
  }, [dispatch, data]);

  useEffect(() => {
    return () => {
      if (isLoaded && data) {
        dispatch(renderTicket());
      }
    };
  }, [isLoaded, dispatch, data]);
  console.log(props);

  return (
    <>
      {props.data ? (
        props.renderTickets.map(
          (item: TicketsMap) => {
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
          }
        )
      ) : (
        <h2>{props.error}</h2>
      )}
    </>
  );
};

const mapState = (state: RootStates) => ({
  isLoaded: state.mainReducer.isLoaded,
  data: state.mainReducer.data,
  renderTickets: state.mainReducer.renderTickets,
  error: state.mainReducer.error,
});
const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TicketsList);
