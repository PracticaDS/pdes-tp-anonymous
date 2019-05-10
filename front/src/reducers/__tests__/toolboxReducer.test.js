import toolboxReducer from '../toolboxReducer';
import actions from '../../actions/toolboxActions';

describe('Toolbar Reducer', () => {
  it('Should return the initial state', () => {
    expect(toolboxReducer(undefined, {})).toEqual({ currentAction: null, machines: [], floor: [] });
  });

  it('Should add machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(toolboxReducer(undefined, actions.addMachine(machine)))
      .toEqual({ currentAction: null, machines: [machine], floor: [] });
  });

  it('Should remove machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(toolboxReducer({
      currentAction: null,
      machines: [machine],
      floor: [],
    }, actions.removeMachine(1)))
      .toEqual({ currentAction: null, machines: [], floor: [] });
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
      toolboxReducer({
        currentAction: null,
        machines: [machine1, machine2],
        floor: [],
      }, actions.removeMachine(1)),
    ).toEqual({ currentAction: null, machines: [machine2], floor: [] });
  });

  it('Should rotate machine', () => {
    const machine = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: 0,
      type: 'Starter',
    };
    expect(
      toolboxReducer({
        currentAction: null,
        machines: [machine],
        floor: [],
      }, actions.rotateMachine(1)),
    ).toEqual({
      currentAction: null,
      machines: [{ ...machine, direction: 90 }],
      floor: [],
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
      toolboxReducer({
        currentAction: null,
        machines: [machine1, machine2],
        floor: [],
      }, actions.rotateMachine(1)),
    ).toEqual({
      currentAction: null,
      machines: [{ ...machine1, direction: 90 }, machine2],
      floor: [],
    });
  });

  it('Should set current action', () => {
    expect(toolboxReducer(undefined, actions.setCurrentAction('Starter')))
      .toEqual({ currentAction: 'Starter', machines: [], floor: [] });
  });
});
