import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Transporter from '../../../ToolBox/Machines/Transporter';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Transporter Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Transporter />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Transporter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
  it('when current action is TRANSPORTER should add selected class', () => {
    const store = mockStore({ currentAction: 'TRANSPORTER' });
    const component = mount(
      <Provider store={store}>
        <Transporter />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Transporter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'TRANSPORTER' });
  });

  it('click the component when currentAction is TRANSPORTER', () => {
    const store = mockStore({ currentAction: 'TRANSPORTER' });
    const component = mount(
      <Provider store={store}>
        <Transporter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
