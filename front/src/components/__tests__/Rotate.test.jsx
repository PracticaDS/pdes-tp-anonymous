import React from 'react';
import { shallow } from 'enzyme';
import Rotate from '../Rotate';

describe('Rotate Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Rotate />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
