import React from 'react';
import { shallow, mount } from 'enzyme';
import Remove from '../../actions/Remove';

describe('Remove Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Remove />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an action className', () => {
    const component = mount(<Remove />);
    expect(component.find('img').hasClass('action')).toBeTruthy();
  });
});
