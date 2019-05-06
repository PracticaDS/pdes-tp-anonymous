import tickSeller from '../tickSeller';

describe('Seller', () => {
  it('when seller is empty should do nothing', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'SELLER',
      toSell: [],
    };
    const floor = [];
    expect(tickSeller(machine, floor))
      .toEqual({ machine, floor });
  });
  it('when the floor have elements on the same position of seller should take elements', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'SELLER',
      toSell: [],
    };
    const floor = [{
      position: { x: 1, y: 0 },
      elements: [{ type: 'GOLD', state: 'SOLID' }],
    }];
    expect(tickSeller(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          toSell: [{ type: 'GOLD', state: 'SOLID' }],
        },
        floor: [],
      });
  });
  it('when the seller and the floor have elements should take and sell elements', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
      type: 'SELLER',
      toSell: [{ type: 'GOLD', state: 'SOLID' }],
    };
    const floor = [{
      position: { x: 1, y: 0 },
      elements: [{ type: 'SILVER', state: 'SOLID' }],
    }];
    expect(tickSeller(machine, floor))
      .toEqual({
        machine: {
          ...machine,
          toSell: [{ type: 'SILVER', state: 'SOLID' }],
        },
        floor: [],
      });
  });
});
