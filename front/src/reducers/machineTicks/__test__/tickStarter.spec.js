import tickStarter from '../tickStarter';

describe('Starter', () => {
  it('when starter is empty should craft', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'STARTER',
      resource: { type: 'GOLD', state: 'SOLID' },
      isCrafting: false,
    };
    const floor = [];
    expect(tickStarter(machine, floor))
      .toEqual({ machine: { ...machine, isCrafting: true }, floor });
  });
  it('when starter is crafting should put element on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'STARTER',
      resource: { type: 'GOLD', state: 'SOLID' },
      isCrafting: true,
    };
    const floor = [];
    expect(tickStarter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          isCrafting: false,
        },
        floor: [{
          position: { x: 1, y: -1 },
          elements: [{ type: 'GOLD', state: 'SOLID' }],
        }],
      });
  });
});
