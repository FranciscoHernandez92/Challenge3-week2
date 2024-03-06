export const methodLength = (array) => {
  let round = 0;
  for (const i of array) {
    round++;
  }
  return round;
};

export const methodPop = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const removeElement = array[array.length - 1];
  array.length -= 1;
  return removeElement;
};

export const methodShift = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const removeElement = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return removeElement;
};

export const methodUnshift = (array, ...n) => {
  if (array.length === 0) {
    return n.length;
  }
  const newLength = array.length + n.length;
  for (let i = 0; i < n.length; i++) {
    n[i] += array[i - 1];
  }
  return newLength;
};
