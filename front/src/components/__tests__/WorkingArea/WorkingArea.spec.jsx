import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import WorkingArea from '../../WorkingArea/WorkingArea';

const mockStore = configureStore([]);

describe('Working Area', () => {
  it('should call init', () => {
    const store = mockStore({ currentAction: { action: null } });
    mount(
      <Provider store={store}>
        <WorkingArea />
      </Provider>,
    );
    const action = store.getActions()[0];
    expect(action).toEqual({ type: 'INIT', payload: { width: 4, height: 4 } });
  });
  it('should call init and tick', (success) => {
    const store = mockStore({ currentAction: { action: null } });
    mount(
      <Provider store={store}>
        <WorkingArea />
      </Provider>,
    );
    setTimeout(() => {
      expect(store.getActions()).toEqual([{ type: 'INIT', payload: { width: 4, height: 4 } }, { type: 'TICK' }]);
      success();
    }, 3005);
  });
});
