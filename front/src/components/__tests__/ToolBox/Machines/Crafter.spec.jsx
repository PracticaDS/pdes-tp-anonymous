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
      <Provider store={mockStore({})}>
        <Crafter />
      </Provider>,
    );
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(
      <Provider store={mockStore({})}>
        <Crafter />
      </Provider>,
    );
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
  it('when current action is CRAFTER should add selected class', () => {
    const store = mockStore({ currentAction: 'CRAFTER' });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    expect(component.find('img').hasClass('machine selected')).toBeTruthy();
  });

  it('click the component when currentAction is empty', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: 'CRAFTER' });
  });

  it('click the component when currentAction is CRAFTER', () => {
    const store = mockStore({ currentAction: 'CRAFTER' });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: null });
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
