import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Seller from '../../../ToolBox/Machines/Seller';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

describe('Seller Component', () => {
  it('has an img tag', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Seller />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an toolboxElement className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Seller />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
  it('when current action is SELLER should add selected class', () => {
    const store = mockStore({ currentAction: 'SELLER' });
    const component = mount(
      <Provider store={store}>
        <Seller />
      </Provider>,
    );
    expect(component.find('img').hasClass('toolboxElement selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Seller />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'SELLER' });
  });

  it('click the component when currentAction is SELLER', () => {
    const store = mockStore({ currentAction: 'SELLER' });
    const component = mount(
      <Provider store={store}>
        <Seller />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('toolboxElement')).toBeTruthy();
  });
});
