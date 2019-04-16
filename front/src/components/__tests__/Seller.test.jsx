import React from 'react';
import { shallow } from 'enzyme';
import Seller from '../Seller';

describe('Seller Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Seller />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
