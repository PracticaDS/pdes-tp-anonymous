import tickCrafter from '../tickCrafter';

describe('Crafter', () => {
  it('when crafter is empty should do nothing', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [],
      isCrafting: false,
    };
    const floor = [];
    expect(tickCrafter(machine, floor)).toEqual({ machine, floor });
  });
  it('when crafter is empty and floor have element should take element', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [],
      isCrafting: false,
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [{ type: 'GOLD', state: 'SOLID' }] }];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 1 }],
        },
        floor: [],
      });
  });
  it('when crafter have element but not all should do nothing', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 1 }],
      isCrafting: false,
    };
    const floor = [];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine,
        floor,
      });
  });
  it('when crafter have all element to craft should craft', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 1 }, { material: { type: 'SILVER', state: 'SOLID' }, amount: 1 }],
      isCrafting: false,
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [] }];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 0 }, { material: { type: 'SILVER', state: 'SOLID' }, amount: 0 }],
          isCrafting: true,
        },
        floor: [],
      });
  });
  it('when crafter have all element to craft and more should craft', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 2 }, { material: { type: 'SILVER', state: 'SOLID' }, amount: 1 }],
      isCrafting: false,
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [] }];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 1 }, { material: { type: 'SILVER', state: 'SOLID' }, amount: 0 }],
          isCrafting: true,
        },
        floor: [],
      });
  });
  it('when crafter is crafting should put the element on the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          {
            material: { type: 'GOLD', state: 'SOLID' },
            amount: 1,
          },
          {
            material: { type: 'SILVER', state: 'SOLID' },
            amount: 1,
          },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [],
      isCrafting: true,
    };
    const floor = [];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          isCrafting: false,
        },
        floor: [{ position: { x: 1, y: -1 }, elements: [{ type: 'PEPE', state: 'SOLID' }] }],
      });
  });
  it('when crafter take tha same element from the floor', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'CRAFTER',
      recipe: {
        name: 'Sarlanga',
        ingredients: [
          { material: { type: 'GOLD', state: 'SOLID' }, amount: 1 },
          { material: { type: 'SILVER', state: 'SOLID' }, amount: 1 },
        ],
        newMaterial: { type: 'PEPE', state: 'SOLID' },
      },
      ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 1 }, { material: { type: 'COPPER', state: 'SOLID' }, amount: 1 }],
      isCrafting: false,
    };
    const floor = [{ position: { x: 1, y: 0 }, elements: [{ type: 'GOLD', state: 'SOLID' }] }];
    expect(tickCrafter(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          ingredients: [{ material: { type: 'GOLD', state: 'SOLID' }, amount: 2 }, { material: { type: 'COPPER', state: 'SOLID' }, amount: 1 }],
        },
        floor: [],
      });
  });
});
