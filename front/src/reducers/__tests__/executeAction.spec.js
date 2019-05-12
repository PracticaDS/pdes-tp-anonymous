import executeAction from '../executeAction';

function starterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'STARTER',
    resource: { type: 'GOLD', state: 'SOLID' },
    isCrafting: false,
  };
}

function transporterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'TRANSPORTER',
    onBoard: [],
  };
}

function emptyMachine(position) {
  return {
    position,
    type: 'EMPTY',
  };
}

describe('executeAction', () => {
  it('when action is null should do nothing', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, null)).toEqual(machines);
  });
  it('when action is STARTER should change empty machine to starter machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, 'STARTER')).toEqual([starterMachine(position)]);
  });
  it('when action is STARTER should change first empty machine to starter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, 'STARTER')).toEqual([starterMachine(position), emptyMachine(position2)]);
  });
  it('when action is REMOVE_MACHINE should change starter machine to empty machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [starterMachine(position)];
    expect(executeAction({ x: 1, y: 0 }, machines, 'REMOVE_MACHINE')).toEqual([emptyMachine(position)]);
  });
  it('when action is REMOVE_MACHINE should change first starter machine to empty machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [starterMachine(position), emptyMachine(position2)];
    expect(executeAction({ x: 1, y: 0 }, machines, 'REMOVE_MACHINE')).toEqual([emptyMachine(position), emptyMachine(position2)]);
  });
  it('when action is ROTATE_MACHINE should change position to starter machine', () => {
    const position = { x: 1, y: 0 };
    const machine = starterMachine(position);
    const machines = [machine];
    expect(executeAction({ x: 1, y: 0 }, machines, 'ROTATE_MACHINE')).toEqual([{ ...machine, direction: 90 }]);
  });
  it('when action is ROTATE_MACHINE should change position to first starter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machine = starterMachine(position);
    const machines = [machine, emptyMachine(position2)];
    expect(executeAction({ x: 1, y: 0 }, machines, 'ROTATE_MACHINE'))
      .toEqual([{ ...machine, direction: 90 }, emptyMachine(position2)]);
  });
  it('when action is TRANSPORTER should change empty machine to transporter machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, 'TRANSPORTER')).toEqual([transporterMachine(position)]);
  });
  it('when action is TRANSPORTER should change first empty machine to transporter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, 'TRANSPORTER')).toEqual([transporterMachine(position), emptyMachine(position2)]);
  });
});
