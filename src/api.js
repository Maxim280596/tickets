export const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search';

export const fetchIdFromApi = () => fetch(SEARCH_ID_URL);

export const SEARCH_TICKETS =
  'https://front-test.beta.aviasales.ru/tickets?searchId=';

export async function fetchTicketsFromApi(id) {
  let response = await fetch(SEARCH_TICKETS + id);
  try {
    if (response.status === 500) {
      return (response = fetch(SEARCH_TICKETS + id));
    } else if (response.status === 404) {
      console.log('Данные загружены');
    }
    return await response.json();
  } catch (erorr) {
    // if (erorr === SyntaxError) {
    //   response = await fetch(
    //     `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
    //   );
    return await response.json();
    // } else throw erorr;
  }
}
