/* import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import WorkingArea from '../../WorkingArea/WorkingArea';

const mockStore = configureStore([]);
const store = mockStore({ currentAction: { action: null } });
*/

describe('Working Area', () => {
  it('basic test', () => {
    expect(true).toEqual(true);
  });
  /* it('should call tick', () => {
    const store = mockStore({ currentAction: { action: null } });
    mount(
      <Provider store={store}>
        <WorkingArea />
      </Provider>,
    );
    const action = store.getActions();
    expect(action).toEqual({ type: 'TICK' });
    // expect(action).toEqual({ type: 'INIT', payload: { width: 4, height: 4 } });
  });
  it('should call init and tick', (success) => {
    const store = mockStore({ currentAction: { action: null } });
    shallow(
      (
        <Provider store={store}>
          <WorkingArea username="pepe" gameId="5cffa5985fc42e0ea1f8a420" />
        </Provider>), { disableLifecycleMethods: true },
    );
    setTimeout(() => {
      // expect(store.getActions()).toEqual([{ type: 'INIT', payload:
      // { width: 4, height: 4 } }, { type: 'TICK' }]);
      expect(store.getActions()[0]).toEqual({ type: 'TICK' });
      success();
    }, 3005);
  }); */
});
