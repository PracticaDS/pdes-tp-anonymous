import React from 'react';
import { shallow } from 'enzyme';
import Information from '../../Information/Information';

describe('Information component', () => {
  it('The Information panel contains a title', () => {
    const info = shallow(<Information />);
    expect(info.find('h2').text()).toEqual("Detalles");
  });
  it('The Information panel contains selected machine description', () => {
    const info = shallow(<Information />);
    expect(info.find('div.info').at(0).hasClass('name')).toEqual(true);
    expect(info.find('div.info').at(1).hasClass('cost')).toEqual(true);
    expect(info.find('div.info').at(2).hasClass('frequency')).toEqual(true);
  });
});
