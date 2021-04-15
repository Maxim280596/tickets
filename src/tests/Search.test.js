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
  it('Filter have rendered correctly', () => {
    store = mockStore(initialState);
    const search = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(toJson(search)).toMatchSnapshot();
  });
});
