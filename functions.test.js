import {
  methodLength,
  methodPop,
  methodShift,
  methodUnshift,
} from './functions.js';

describe('methodLength', () => {
  test('should be 0 when argument is []', () => {
    //Arrange
    const x = [];
    const expected = 0;
    //Act
    const r = methodLength(x);
    //Assert
    expect(r).toBe(expected);
  });
});
describe('methodPop', () => {
  test('should be 4 when argument is [1, 2, 3, 4]', () => {
    //Arrange
    const x = [1, 2, 3, 4];
    const expected = 4;
    //Act
    const r = methodPop(x);
    //Assert
    expect(r).toBe(expected);
  });
  test('should be 0 when argument is []', () => {
    //Arrange
    const x = [];
    const expected = 0;
    //Act
    const r = methodPop(x);
    //Assert
    expect(r).toBe(expected);
  });

  test('should be "hola" when argument is ["mundo", "hola"]', () => {
    //Arrange
    const x = ['mundo', 'hola'];
    const expected = 'hola';
    //Act
    const r = methodPop(x);
    //Assert
    expect(r).toBe(expected);
  });
});

describe('methodShift', () => {
  test('should be 1 when argument is [1, 2, 3, 4]', () => {
    //Arrange
    const x = [1, 2, 3, 4];
    const expected = 1;
    //Act
    const r = methodShift(x);
    //Assert
    expect(r).toBe(expected);
  });
  test('should be "hola" when argument is ["hola", "mundo"]', () => {
    //Arrange
    const x = ['hola', 'mundo'];
    const expected = 'hola';
    //Act
    const r = methodShift(x);
    //Assert
    expect(r).toBe(expected);
  });
});

describe('methodUnshift', () => {
  test('should be 2 when argument the first is [] and the second [2, 8]', () => {
    //Arrange
    const x = [];
    const y = [2, 8];
    const expected = 2;
    //Act
    const r = methodUnshift(x, y);
    //Assert
    expect(r).toBe(expected);
  });
  test('should be 5 when argument the first is [4, 5, 6, 7] and the second [8]', () => {
    //Arrange
    const x = [4, 5, 6, 7];
    const y = [8];
    const expected = 5;
    //Act
    const r = methodUnshift(x, y);
    //Assert
    expect(r).toBe(expected);
  });
  test('should be 3 when argument the first is ["hola", "mundo"] and the second ["greetings:"]', () => {
    //Arrange
    const x = ['hola', 'mundo'];
    const y = ['greetings:'];
    const expected = 3;
    //Act
    const r = methodUnshift(x, y);
    //Assert
    expect(r).toBe(expected);
  });
});
