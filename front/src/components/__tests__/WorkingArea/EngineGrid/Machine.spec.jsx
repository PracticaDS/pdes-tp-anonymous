import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Machine from '../../../WorkingArea/EngineGrid/Machine';

const mockStore = configureStore([]);
const store = mockStore({ currentAction: { action: null } });
const machine = mount(
  <Provider store={store}>
    <Machine />
  </Provider>,
);

describe('Machine', () => {
  it('Machine exists', () => {
    expect(machine.find('div').hasClass('empty')).toEqual(true);
  });
});
