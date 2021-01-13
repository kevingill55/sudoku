export const calculateStarting = (boxRow) => {
  if (boxRow === 1) {
    return 0;
  } else if (boxRow === 2) {
    return 3;
  } else {
    return 6;
  }
};
