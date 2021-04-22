export const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search';

export const SEARCH_TICKETS =
  'https://front-test.beta.aviasales.ru/tickets?searchId=';

export const getId = () => fetch(SEARCH_ID_URL).then((data) => data.json());

export const getTickets = (id:any) =>
  fetch(SEARCH_TICKETS + id.searchId)
    .then((data) => data.json())
    .then((response) => response.tickets);
