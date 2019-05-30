import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Crafter from '../../../ToolBox/Machines/Crafter';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Crafter Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Crafter />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({ currentAction: { action: null } })}>
        <Crafter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
  it('when current action is CRAFTER should add selected class', () => {
    const store = mockStore({ currentAction: { action: 'CRAFTER' } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'CRAFTER' } });
  });

  it('click the component when currentAction is CRAFTER', () => {
    const store = mockStore({ currentAction: { action: 'CRAFTER' } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: null } });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
