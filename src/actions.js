export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_TICKETS = 'LOAD_TICKETS';
export const PUT_TICKETS = 'PUT_TICKETS';

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer
  }
}

export const putTickets = (dataFromServer) => {
  return {
    type: PUT_TICKETS,
    payload: dataFromServer
  }
}

export const loadData = () => {
  return {
    type: LOAD_DATA
  }
}

export const loadTickets = () => {
  return {
    type: LOAD_TICKETS
  }
}