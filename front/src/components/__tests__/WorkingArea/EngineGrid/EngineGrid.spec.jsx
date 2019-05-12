import React from 'react';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import EngineGrid from '../../../WorkingArea/EngineGrid/EngineGrid';
import reducers from '../../../../reducers/toolboxReducer';

const store = createStore(reducers);

describe('Engine Grid component', () => {
  it('The grid is represented with a table', () => {
    const grid = mount(<EngineGrid store={store} />);
    expect(grid.find('table').length).toEqual(1);
  });
  it('The grid is created with a size of x per y', () => {
    const width = 6;
    const height = 5;
    const grid = mount(<EngineGrid store={store} />);
    expect(grid.find('tr').length).toEqual(height);
    expect(grid.find('td').length).toEqual(width * height);
  });
  it('The grid init empty', () => {
    const width = 4;
    const height = 5;
    const grid = mount(<EngineGrid store={store} />);
    expect(grid.find('.empty').length).toEqual(width * height);
  });
});
