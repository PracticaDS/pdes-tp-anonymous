import React from 'react';
import { shallow } from 'enzyme';
import Remove from '../Remove';

describe('Remove Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Remove />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
