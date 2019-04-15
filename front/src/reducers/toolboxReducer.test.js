import toolbarReducer from './toolboxReducer';
import actions from '../actions/toolboxActions';

describe('Toolbar Reducer', () => {
  it('Should return the initial state', () => {
    expect(toolbarReducer(undefined, {})).toEqual({ currentAction: null, machines: [] });
  });

  it('Should add machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(toolbarReducer(undefined, actions.addMachine(machine)))
      .toEqual({ currentAction: null, machines: [machine] });
  });

  it('Should remove machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(toolbarReducer({ currentAction: null, machines: [machine] }, actions.removeMachine(1)))
      .toEqual({ currentAction: null, machines: [] });
  });

  it('Should remove machine1 when have more than one', () => {
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
      toolbarReducer({
        currentAction: null,
        machines: [machine1, machine2],
      }, actions.removeMachine(1)),
    ).toEqual({ currentAction: null, machines: [machine2] });
  });

  it('Should rotate machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(
      toolbarReducer({
        currentAction: null,
        machines: [machine],
      }, actions.rotateMachine(1)),
    ).toEqual({
      currentAction: null,
      machines: [{ ...machine, direction: 90 }],
    });
  });

  it('Should rotate machine1 when have more than one machine ', () => {
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
      toolbarReducer({
        currentAction: null,
        machines: [machine1, machine2],
      }, actions.rotateMachine(1)),
    ).toEqual({
      currentAction: null,
      machines: [{ ...machine1, direction: 90 }, machine2],
    });
  });

  it('Should set current action', () => {
    expect(toolbarReducer(undefined, actions.setCurrentAction('Starter')))
      .toEqual({ currentAction: 'Starter', machines: [] });
  });
});
