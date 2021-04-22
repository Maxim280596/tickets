import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Filter from '../components/Filter';

let store, onClick, setUp, props;
beforeAll(() => {
  onClick = jest.fn();
  props = {
    onClick,
  };
  setUp = () =>
    mount(
      <Provider store={store}>
        <Filter {...props} />
      </Provider>
    );
});

describe('Testing rendering of <Filter/>', () => {
  let component;

  beforeEach(() => {
    const initialState = {};
    const mockStore = configureStore();
    store = mockStore(initialState);
    component = setUp();
  });

  it('should Filter have be rendered correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

});

describe('testing onclick functions', () => {
  let functions;

  beforeEach(() => {
    functions = setUp();
  });

  it('should be filteredPrice must be active', () => {
    functions = functions.find('.price').first();
    functions.simulate('click');
    setTimeout(() => {
      expect(functions.prop('active')).toBe(true);
    });
  });

  it('should be filteredFast must be active', () => {
    functions = functions.find('.price').first();
    functions.simulate('click');
    setTimeout(() => {
      expect(functions.prop('active')).toBe(true);
    });
  });
  
});
