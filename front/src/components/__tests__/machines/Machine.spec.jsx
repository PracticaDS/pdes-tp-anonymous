import React from 'react';
import { shallow } from 'enzyme';
import Machine from '../../machines/Machine';

describe('Machine component', () => {
  it('it can not be instantiated', () => {
    expect(() => { shallow(<Machine />); }).toThrow(TypeError);
  });
});
