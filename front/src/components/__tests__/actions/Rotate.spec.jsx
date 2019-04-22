import React from 'react';
import { shallow, mount } from 'enzyme';
import Rotate from '../../actions/Rotate';

describe('Rotate Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Rotate />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an action className', () => {
    const component = mount(<Rotate />);
    expect(component.find('img').hasClass('action')).toBeTruthy();
  });
});
