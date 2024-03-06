export const methodLength = (array) => {
  let round = 0;
  for (const i of array) {
    round++;
  }
  return round;
};

export const methodPop = (array) => {
  const removeElement = array[array.length - 1];
  array.length -= 1;
  return removeElement;
};
