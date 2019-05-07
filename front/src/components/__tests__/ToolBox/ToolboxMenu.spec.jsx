import React from 'react';
import { shallow } from 'enzyme';
import ToolboxMenu from '../../ToolBox/ToolboxMenu';

describe('ToolboxMenu component', () => {
  it('The ToolboxMenu contains all machines', () => {
    const menu = shallow(<ToolboxMenu />);
    expect(menu.find('Furnace')).toBeTruthy();
    expect(menu.find('Starter')).toBeTruthy();
    expect(menu.find('Crafter')).toBeTruthy();
    expect(menu.find('Seller')).toBeTruthy();
    expect(menu.find('Transport')).toBeTruthy();
  });
  it('The ToolboxMenu contains all actions', () => {
    const menu = shallow(<ToolboxMenu />);
    expect(menu.find('Move')).toBeTruthy();
    expect(menu.find('Remove')).toBeTruthy();
    expect(menu.find('Rotate')).toBeTruthy();
  });
});
