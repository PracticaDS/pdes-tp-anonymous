import React from 'react';
import { shallow } from 'enzyme';
import Starter from '../Starter';

describe('Starter Component', () => {
  it('has an img tag', () => {
    const component = shallow(<Starter />);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });
});
