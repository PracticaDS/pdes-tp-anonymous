import React from 'react';
import { shallow, mount } from 'enzyme';
import Remove from '../Remove';

describe('Remove Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Remove />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an controller className', () => {
    const component = mount(<Remove />);
    expect(component.find('img').hasClass('controller')).toBeTruthy();
  });
});
