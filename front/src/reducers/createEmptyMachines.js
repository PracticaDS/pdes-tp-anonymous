function emptyMachine(position) {
  return { position, type: 'EMPTY' };
}

export default ({ width, height }) => {
  const listWidth = [...Array(width).keys()];
  const listHeight = [...Array(height).keys()];
  return listWidth.reduce(
    (res, i) => [...res, ...listHeight.map(j => emptyMachine({ x: j, y: i }))],
    [],
  );
};
