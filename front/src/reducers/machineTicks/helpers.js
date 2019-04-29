export function outputOf(machine) {
  switch (machine.direction) {
    case 0:
      return { ...machine.position, y: machine.position.y - 1 };
    case 90:
      return { ...machine.position, x: machine.position.x + 1 };
    case 180:
      return { ...machine.position, y: machine.position.y + 1 };
    case 270:
      return { ...machine.position, x: machine.position.x - 1 };
    default:
      return { ...machine.position };
  }
}

export function getElements(position, floor) {
  return floor
    .filter(element => element.position.x === position.x && element.position.y === position.y)
    .reduce((res, object) => [...res, ...object.elements], []);
}

export function removeElements(position, floor) {
  return floor
    .filter(element => element.position.x !== position.x || element.position.y !== position.y);
}
