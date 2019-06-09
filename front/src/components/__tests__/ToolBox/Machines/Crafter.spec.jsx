import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Crafter from '../../../ToolBox/Machines/Crafter';
import { SET_ACTION_TYPE } from '../../../../actions/toolboxActions';

const mockStore = configureStore([]);

function newMaterial(type) {
  return {
    type,
    state: 'SOLID',
  };
}

function material(type, amount) {
  return {
    material: newMaterial(type),
    amount,
  };
}

function recipeCUPROALUMINIUM() {
  return {
    name: 'CUPROALUMINIUM',
    ingredients: [material('ALUMINUM', 1), material('COPPER', 1)],
    newMaterial: newMaterial('CUPROALUMINIUM'),
  };
}

function recipeBRONZE() {
  return {
    name: 'BRONZE',
    ingredients: [material('TIN', 1), material('COPPER', 2)],
    newMaterial: newMaterial('BRONZE'),
  };
}

function recipeREDGOLD() {
  return {
    name: 'REDGOLD',
    ingredients: [material('GOLD', 2), material('COPPER', 1)],
    newMaterial: newMaterial('REDGOLD'),
  };
}

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

  it('click the component when currentAction is empty (CUPROALUMINIUM)', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').first().simulate('click');
    component.find('.dropdown-item').first().simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'CRAFTER', data: recipeCUPROALUMINIUM() } });
  });

  it('click the component when currentAction is empty (BRONZE)', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').first().simulate('click');
    component.find('.dropdown-item').at(1).simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'CRAFTER', data: recipeBRONZE() } });
  });

  it('click the component when currentAction is empty (REDGOLD)', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').first().simulate('click');
    component.find('.dropdown-item').last().simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'CRAFTER', data: recipeREDGOLD() } });
  });

  it('click the component when currentAction is CRAFTER', () => {
    const store = mockStore({ currentAction: { action: null } });
    const component = mount(
      <Provider store={store}>
        <Crafter />
      </Provider>,
    );
    component.find('div').first().simulate('click');
    component.find('.dropdown-item').first().simulate('click');
    const action = store.getActions()[0];
    expect(action).toEqual({ type: SET_ACTION_TYPE, payload: { action: 'CRAFTER', data: recipeCUPROALUMINIUM() } });
  });
});
