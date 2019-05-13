import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Starter from '../../../ToolBox/Machines/Starter';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Starter Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Starter />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Starter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
  it('when current action is STARTER should add selected class', () => {
    const store = mockStore({ currentAction: 'STARTER' });
    const component = mount(
      <Provider store={store}>
        <Starter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Starter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'STARTER' });
  });

  it('click the component when currentAction is STARTER', () => {
    const store = mockStore({ currentAction: 'STARTER' });
    const component = mount(
      <Provider store={store}>
        <Starter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
