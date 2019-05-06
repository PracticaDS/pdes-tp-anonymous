import tickTransporter from '../tickTransporter';

describe('Transporter', () => {
  it('when transporter is empty should do nothing', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'TRANSPORTER',
      onBoard: [],
    };
    const floor = [];
    expect(tickTransporter(machine, floor))
      .toEqual({ machine, floor });
  });
  it('when transporter is empty take elements from the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'TRANSPORTER',
      onBoard: [],
    };
    const floor = [{
      position: { x: 1, y: 0 },
      elements: [{ type: 'GOLD', state: 'SOLID' }],
    }];
    expect(tickTransporter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          onBoard: [{ type: 'GOLD', state: 'SOLID' }],
        },
        floor: [],
      });
  });
  it('when transporte have elements on board should put elements on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'TRANSPORTER',
      onBoard: [{ type: 'GOLD', state: 'SOLID' }],
    };
    const floor = [];
    expect(tickTransporter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          onBoard: [],
        },
        floor: [{
          position: { x: 1, y: -1 },
          elements: [{ type: 'GOLD', state: 'SOLID' }],
        }],
      });
  });
  it('when transporte and the floor have elements should take and put elements on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'TRANSPORTER',
      onBoard: [{ type: 'GOLD', state: 'SOLID' }],
    };
    const floor = [{
      position: { x: 1, y: 0 },
      elements: [{ type: 'GOLD', state: 'SOLID' }],
    }];
    expect(tickTransporter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          onBoard: [{ type: 'GOLD', state: 'SOLID' }],
        },
        floor: [{
          position: { x: 1, y: -1 },
          elements: [{ type: 'GOLD', state: 'SOLID' }],
        }],
      });
  });
});
