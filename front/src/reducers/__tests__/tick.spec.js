import executeTick from '../tick';

function starterMachine() {
  return {
    position: { x: 1, y: 0 },
    direction: 0,
    type: 'STARTER',
    resource: { type: 'GOLD', state: 'SOLID' },
    isCrafting: false,
  };
}

function crafterMachine() {
  return {
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
    ingredients: [],
    isCrafting: false,
  };
}

function furnaceMachine() {
  return {
    position: { x: 1, y: 0 },
    direction: 0,
    type: 'FURNACE',
    toFurnace: [],
    doneFurnace: [],
  };
}

function sellerMachine() {
  return {
    position: { x: 1, y: 0 },
    direction: 0,
    type: 'SELLER',
    toSell: [],
  };
}

function transporterMachine() {
  return {
    position: { x: 1, y: 0 },
    direction: 0,
    type: 'TRANSPORTER',
    onBoard: [],
  };
}

describe('Tick', () => {
  it('executeTick of not know machine', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
    };
    const floor = [];
    const machines = [machine];
    expect(executeTick(machines, floor)).toEqual({ machines, floor });
  });
  it('executeTick with starter machine', () => {
    const machine = starterMachine();
    const machines = [machine];
    const floor = [];
    expect(executeTick(machines, floor))
      .toEqual({ machines: [{ ...machine, isCrafting: true }], floor });
  });
  it('executeTick with transporter machine', () => {
    const machines = [transporterMachine()];
    const floor = [];
    expect(executeTick(machines, floor)).toEqual({ machines, floor });
  });
  it('executeTick with furnace machine', () => {
    const machines = [furnaceMachine()];
    const floor = [];
    expect(executeTick(machines, floor)).toEqual({ machines, floor });
  });
  it('executeTick with crafter machine', () => {
    const machines = [crafterMachine()];
    const floor = [];
    expect(executeTick(machines, floor)).toEqual({ machines, floor });
  });
  it('executeTick with seller machine', () => {
    const machines = [sellerMachine()];
    const floor = [];
    expect(executeTick(machines, floor)).toEqual({ machines, floor });
  });
});
