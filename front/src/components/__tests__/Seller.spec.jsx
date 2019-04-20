import React from 'react';
import { shallow, mount } from 'enzyme';
import Seller from '../Seller';

describe('Seller Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Seller />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Seller />);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
