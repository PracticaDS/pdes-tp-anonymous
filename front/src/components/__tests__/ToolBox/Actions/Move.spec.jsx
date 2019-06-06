import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';
import Move from '../../../ToolBox/Actions/Move';

const mockStore = configureStore([]);

describe('Move Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Move />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an action className', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Move />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });

  it('when current action is MOVE_MACHINE should add selected class', () => {
    const store = mockStore({ currentAction: { action: 'MOVE_MACHINE' } });
    const component = mount(
      <Provider store={store}>
        <Move />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Move />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'MOVE_MACHINE' } });
  });

  it('click the component when currentAction is MOVE_MACHINE', () => {
    const store = mockStore({ currentAction: { action: 'MOVE_MACHINE' } });
    const component = mount(
      <Provider store={store}>
        <Move />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: null } });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
