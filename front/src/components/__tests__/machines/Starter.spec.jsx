import React from 'react';
import { shallow, mount } from 'enzyme';
import Starter from '../../machines/Starter';

describe('Starter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Starter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Starter />);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
