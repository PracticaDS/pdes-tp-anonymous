import React from 'react';
import { shallow, mount } from 'enzyme';
import Crafter from '../Crafter';

describe('Crafter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Crafter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Crafter />);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
