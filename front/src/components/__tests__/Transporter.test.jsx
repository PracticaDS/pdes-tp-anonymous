import React from 'react';
import { shallow } from 'enzyme';
import Transporter from '../Transporter';

describe('Transporter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Transporter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
