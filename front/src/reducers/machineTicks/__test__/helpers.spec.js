import { outputOf, getElements, removeElements } from '../helpers';

describe('outputOf', () => {
  it('pass a machine located on 1,0 and direction 0', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 0,
    };
    expect(outputOf(machine)).toEqual({ x: 1, y: -1 });
  });
  it('pass a machine located on 1,0 and direction 0', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 90,
    };
    expect(outputOf(machine)).toEqual({ x: 2, y: 0 });
  });
  it('pass a machine located on 1,0 and direction 0', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 180,
    };
    expect(outputOf(machine)).toEqual({ x: 1, y: 1 });
  });
  it('pass a machine located on 1,0 and direction 0', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 270,
    };
    expect(outputOf(machine)).toEqual({ x: 0, y: 0 });
  });
  it('when direction is not valid shuld return the same position', () => {
    const machine = {
      position: { x: 1, y: 0 },
      direction: 450,
    };
    expect(outputOf(machine)).toEqual({ x: 1, y: 0 });
  });
});

describe('getElements', () => {
  it('should get all elements on position { x: 1 , y: 1 }', () => {
    const floor = [
      {
        position: { x: 1, y: 1 },
        elements: [1, 2, 3],
      },
      {
        position: { x: 1, y: 2 },
        elements: [1],
      },
    ];
    expect(getElements({ x: 1, y: 1 }, floor)).toEqual([1, 2, 3]);
  });
  it('should get empty array on position { x: 2 , y: 2 }', () => {
    const floor = [
      {
        position: { x: 1, y: 1 },
        elements: [1, 2, 3],
      },
      {
        position: { x: 1, y: 2 },
        elements: [1],
      },
    ];
    expect(getElements({ x: 2, y: 2 }, floor)).toEqual([]);
  });
});

describe('removeElements', () => {
  it('should remove all elements on position { x: 1 , y: 1 }', () => {
    const floor = [
      {
        position: { x: 1, y: 1 },
        elements: [1, 2, 3],
      },
      {
        position: { x: 1, y: 2 },
        elements: [1],
      },
    ];
    expect(removeElements({ x: 1, y: 1 }, floor))
      .toEqual([{ position: { x: 1, y: 2 }, elements: [1] }]);
  });
  it('should not remove when pass an empty position { x: 2 , y: 2 }', () => {
    const floor = [
      {
        position: { x: 1, y: 1 },
        elements: [1, 2, 3],
      },
      {
        position: { x: 1, y: 2 },
        elements: [1],
      },
    ];
    expect(removeElements({ x: 2, y: 2 }, floor)).toEqual(floor);
  });
});
