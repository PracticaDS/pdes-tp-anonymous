import React from 'react';
import { shallow, mount } from 'enzyme';
import Transporter from '../Transporter';

describe('Transporter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Transporter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Transporter />);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
