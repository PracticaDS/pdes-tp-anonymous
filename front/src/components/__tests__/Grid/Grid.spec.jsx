import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../../Grid/Grid';

describe('Grid component', () => {
  it('The grid is represented with a table', () => {
    const grid = shallow(<Grid x={4} y={4} />);
    expect(grid.find('table').length).toEqual(1);
  });
  it('The grid is created with a size of x per y', () => {
    const x = 6;
    const y = 5;
    const grid = shallow(<Grid x={x} y={y} />);
    expect(grid.find('tr').length).toEqual(y);
    expect(grid.find('td').length).toEqual(x * y);
  });
  it('The grid init empty', () => {
    const x = 4;
    const y = 5;
    const grid = shallow(<Grid x={x} y={y} />);
    expect(grid.find('.empty').length).toEqual(x * y);
  });
});
