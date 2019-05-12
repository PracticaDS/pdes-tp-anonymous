import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Furnace from '../../../ToolBox/Machines/Furnace';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Furnace Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Furnace />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Furnace />
      </Provider>,
    );
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
  it('when current action is FURNACE should add selected class', () => {
    const store = mockStore({ currentAction: 'FURNACE' });
    const component = mount(
      <Provider store={store}>
        <Furnace />
      </Provider>,
    );
    expect(component.find('img').hasClass('machine selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Furnace />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'FURNACE' });
  });

  it('click the component when currentAction is FURNACE', () => {
    const store = mockStore({ currentAction: 'FURNACE' });
    const component = mount(
      <Provider store={store}>
        <Furnace />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
