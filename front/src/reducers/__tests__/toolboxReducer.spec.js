import toolboxReducer from '../toolboxReducer';
import actions from '../../actions/toolboxActions';

describe('Toolbar Reducer', () => {
  it('Should return the initial state', () => {
    expect(toolboxReducer(undefined, {}))
      .toEqual({ currentAction: { action: null }, machines: [], floor: [] });
  });

  it('init should create empty machines', () => {
    const machine = {
      position: { x: 0, y: 0 },
      type: 'EMPTY',
    };
    expect(toolboxReducer(undefined, actions.init(1, 1)))
      .toEqual({
        height: 1,
        width: 1,
        currentAction: { action: null },
        machines: [machine],
        floor: [],
      });
  });

  it('executeAction when is REMOVE_MACHINE should remove machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'STARTER',
    };
    expect(toolboxReducer({
      currentAction: { action: 'REMOVE_MACHINE' },
      machines: [machine],
      floor: [],
    }, actions.executeAction({ x: 1, y: 1 })))
      .toEqual({ currentAction: { action: 'REMOVE_MACHINE' }, machines: [{ position: { x: 1, y: 1 }, type: 'EMPTY' }], floor: [] });
  });

  it('executeAction when is REMOVE_MACHINE should remove machine1 when have more than one', () => {
    const machine1 = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    const machine2 = {
      id: 2,
      position: { x: 1, y: 2 },
      direction: 0,
      type: 'Starter',
    };
    expect(
      toolboxReducer(
        { currentAction: { action: 'REMOVE_MACHINE' }, machines: [machine1, machine2], floor: [] },
        actions.executeAction({ x: 1, y: 1 }),
      ),
    ).toEqual({ currentAction: { action: 'REMOVE_MACHINE' }, machines: [{ position: { x: 1, y: 1 }, type: 'EMPTY' }, machine2], floor: [] });
  });

  it('executeAction when is ROTATE_MACHINE should rotate machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(
      toolboxReducer({
        currentAction: { action: 'ROTATE_MACHINE' },
        machines: [machine],
        floor: [],
      }, actions.executeAction({ x: 1, y: 1 })),
    ).toEqual({
      currentAction: { action: 'ROTATE_MACHINE' },
      machines: [{ ...machine, direction: 90 }],
      floor: [],
    });
  });

  it('executeAction when is ROTATE_MACHINE should rotate machine1 when have more than one machine ', () => {
    const machine1 = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    const machine2 = {
      id: 2,
      position: { x: 1, y: 2 },
      direction: 0,
      type: 'Starter',
    };
    expect(
      toolboxReducer({
        currentAction: { action: 'ROTATE_MACHINE' },
        machines: [machine1, machine2],
        floor: [],
      }, actions.executeAction({ x: 1, y: 1 })),
    ).toEqual({
      currentAction: { action: 'ROTATE_MACHINE' },
      machines: [{ ...machine1, direction: 90 }, machine2],
      floor: [],
    });
  });

  it('Should set current action', () => {
    expect(toolboxReducer(undefined, actions.setCurrentAction('Starter')))
      .toEqual({ currentAction: 'Starter', machines: [], floor: [] });
  });

  it('executePartialAction when is MOVE_MACHINE should update currentAction', () => {
    const position = { x: 1, y: 1 };
    const machine = {
      id: 1,
      position,
      direction: 0,
      type: 'STARTER',
    };
    expect(toolboxReducer({
      currentAction: { action: 'MOVE_MACHINE' },
      machines: [machine],
      floor: [],
    }, actions.executePartialAction({ x: 1, y: 1 })))
      .toEqual({ currentAction: { action: 'MOVE_MACHINE', data: position }, machines: [machine], floor: [] });
  });
});
