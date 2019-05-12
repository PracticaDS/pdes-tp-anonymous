import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import Starter from '../../../ToolBox/Machines/Starter';
import reducers from '../../../../reducers/toolboxReducer';

const store = createStore(reducers);

describe('Starter Component', () => {
  it('has an img tag', () => {
    const component = mount(<Provider store={store}><Starter /></Provider>);
    const node = component.find('img');
    expect(node.length).toEqual(1);
  });

  it('has an machine className', () => {
    const component = mount(<Provider store={store}><Starter /></Provider>);
    expect(component.find('img').hasClass('machine')).toBeTruthy();
  });
});
