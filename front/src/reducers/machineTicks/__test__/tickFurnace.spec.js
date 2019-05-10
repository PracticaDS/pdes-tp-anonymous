import tickFurnace from '../tickFurnace';

describe('furnace', () => {
  it('when furnace is empty should do nothing', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [],
      doneFurnace: [],
    };
    const floor = [];
    expect(tickFurnace(machine, floor)).toEqual({ machine, floor });
  });
  it('when furnace is empty and floor have element should take element', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [],
      doneFurnace: [],
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [1] }];
    expect(tickFurnace(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          toFurnace: [1],
        },
        floor: [],
      });
  });
  it('when furnace have element to furnace should furnace the element', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [{ type: 'GOLD', state: 'SOLID' }],
      doneFurnace: [],
    };
    const floor = [];
    expect(tickFurnace(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          toFurnace: [],
          doneFurnace: [{ type: 'GOLD', state: 'LIQUID' }],
        },
        floor,
      });
  });
  it('when furnace and floor have element to furnace should furnace the element and take element', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [{ type: 'GOLD', state: 'SOLID' }],
      doneFurnace: [],
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [1] }];
    expect(tickFurnace(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          toFurnace: [1],
          doneFurnace: [{ type: 'GOLD', state: 'LIQUID' }],
        },
        floor: [],
      });
  });
  it('when furnace have element done furnace should put the element on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [],
      doneFurnace: [{ type: 'GOLD', state: 'LIQUID' }],
    };
    const floor = [];
    expect(tickFurnace(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          doneFurnace: [],
        },
        floor: [{ position: { x: 1, y: -1 }, elements: [{ type: 'GOLD', state: 'LIQUID' }] }],
      });
  });
  it('when furnace have element in to and done furnace should put the element on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'FURNACE',
      toFurnace: [{ type: 'GOLD', state: 'SOLID' }],
      doneFurnace: [{ type: 'GOLD', state: 'LIQUID' }],
    };
    const floor = [];
    expect(tickFurnace(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          doneFurnace: [],
        },
        floor: [{ position: { x: 1, y: -1 }, elements: [{ type: 'GOLD', state: 'LIQUID' }] }],
      });
  });
});
