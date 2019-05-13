import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Rotate from '../../../ToolBox/Actions/Rotate';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Rotate Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Rotate />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Rotate />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
  it('when current action is ROTATE_MACHINE should add selected class', () => {
    const store = mockStore({ currentAction: 'ROTATE_MACHINE' });
    const component = mount(
      <Provider store={store}>
        <Rotate />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Rotate />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'ROTATE_MACHINE' });
  });

  it('click the component when currentAction is ROTATE_MACHINE', () => {
    const store = mockStore({ currentAction: 'ROTATE_MACHINE' });
    const component = mount(
      <Provider store={store}>
        <Rotate />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
