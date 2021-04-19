import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Search from '../components/Search';

describe('Testing <Search/>', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  let search;
  beforeAll(() => {
    store = mockStore(initialState);
    search = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });
  it('should Search have be rendered correctly', () => {
    expect(toJson(search)).toMatchSnapshot();
  });
});
