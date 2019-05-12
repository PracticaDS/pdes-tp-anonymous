import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import EngineGrid from '../../../WorkingArea/EngineGrid/EngineGrid';

const mockStore = configureStore([]);

function mockState() {
  return {
    machines: [
      {
        position: { x: 0, y: 0 },
        type: 'EMPTY',
      },
      {
        position: { x: 0, y: 1 },
        type: 'EMPTY',
      },
      {
        position: { x: 1, y: 0 },
        type: 'EMPTY',
      },
      {
        position: { x: 1, y: 1 },
        type: 'EMPTY',
      },
    ],
    width: 2,
  };
}

describe('Engine Grid component', () => {
  it('The grid is represented with a table', () => {
    const store = mockStore(mockState);
    const grid = mount(
      <Provider store={store}>
        <EngineGrid />
      </Provider>,
    );
    expect(grid.find('table').length).toEqual(1);
  });
  it('The grid is created with a size of x per y', () => {
    const width = 2;
    const height = 2;
    const store = mockStore(mockState);
    const grid = mount(
      <Provider store={store}>
        <EngineGrid />
      </Provider>,
    );
    expect(grid.find('tr').length).toEqual(height);
    expect(grid.find('td').length).toEqual(width * height);
  });
  it('The grid init empty', () => {
    const width = 2;
    const height = 2;
    const store = mockStore(mockState);
    const grid = mount(
      <Provider store={store}>
        <EngineGrid />
      </Provider>,
    );
    expect(grid.find('.empty').length).toEqual(width * height);
  });
});
