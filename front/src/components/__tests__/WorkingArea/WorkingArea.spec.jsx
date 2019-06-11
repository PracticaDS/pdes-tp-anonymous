import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import WorkingArea from '../../WorkingArea/WorkingArea';

const mockStore = configureStore([]);
const store = mockStore({ currentAction: { action: null } });
const workingArea = mount(
  <Provider store={store}>
    <WorkingArea />
  </Provider>,
);

describe('Working Area', () => {
  it('Working area contains a working area container', () => {
    expect(workingArea.find('div').at(0).hasClass('working-area-container')).toEqual(true);
  });
  it('Working area contains a EngineGrid', () => {
    expect(workingArea.find('EngineGrid').exists()).toEqual(true);
  });
  it('Working area contains a information', () => {
    expect(workingArea.find('div').at(1).hasClass('earnings-information')).toEqual(true);
  });
});
