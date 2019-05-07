import React from 'react';
import { shallow } from 'enzyme';
import Action from '../../../ToolBox/Actions/Action';

describe('Action component', () => {
  it('it can not be instantiated', () => {
    expect(() => { shallow(<Action />); }).toThrow(TypeError);
  });
});
