import React from 'react';
import { shallow } from 'enzyme';
import ToolboxComponent from '../../ToolBox/ToolboxComponent';

describe('ToolboxComponent', () => {
  it('it can not be instantiated', () => {
    expect(() => { shallow(<ToolboxComponent />); }).toThrow(TypeError);
  });
});
