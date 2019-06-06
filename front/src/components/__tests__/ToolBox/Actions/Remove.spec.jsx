import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Remove from '../../../ToolBox/Actions/Remove';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Remove Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Remove />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Remove />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });

  it('when current action is REMOVE_MACHINE should add selected class', () => {
    const store = mockStore({ currentAction: { action: 'REMOVE_MACHINE' } });
    const component = mount(
      <Provider store={store}>
        <Remove />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Remove />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'REMOVE_MACHINE' } });
  });

  it('click the component when currentAction is REMOVE_MACHINE', () => {
    const store = mockStore({ currentAction: { action: 'REMOVE_MACHINE' } });
    const component = mount(
      <Provider store={store}>
        <Remove />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: null } });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
