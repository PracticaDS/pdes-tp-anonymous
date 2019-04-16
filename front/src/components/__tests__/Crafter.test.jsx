import React from 'react';
import { shallow } from 'enzyme';
import Crafter from '../Crafter';

describe('Crafter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Crafter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
