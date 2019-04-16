import React from 'react';
import { shallow } from 'enzyme';
import Furnace from '../Furnace';

describe('Furnace Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Furnace />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
