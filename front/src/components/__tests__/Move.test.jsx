import React from 'react';
import { shallow } from 'enzyme';
import Move from '../Move';

describe('Move Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Move />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
