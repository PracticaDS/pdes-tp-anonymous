import React from 'react';
import { shallow, mount } from 'enzyme';
import Move from '../../actions/Move';

describe('Move Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Move />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an action className', () => {
    const component = mount(<Move />);
    expect(component.find('img').hasClass('action')).toBeTruthy();
  });
});
