import React from 'react';
import { shallow } from 'enzyme';
import Machine from '../../../ToolBox/Machines/Machine';

describe('Machine component', () => {
  it('it can not be instantiated', () => {
    expect(() => { shallow(<Machine />); }).toThrow(TypeError);
  });
});
