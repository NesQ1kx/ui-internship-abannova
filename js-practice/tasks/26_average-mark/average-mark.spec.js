// import { averageMark } from './average-mark';

describe.skip('averageMark', () => {
  it('averageMark([2, 2, 2, 2]) should return 2', () => {
    expect(averageMark([2, 2, 2, 2])).toBe(2);
  });

  it('averageMark([1, 2, 3, 4, 5]) should return 3', () => {
    expect(averageMark([1, 2, 3, 4, 5])).toBe(3);
  });

  it('averageMark([1, 1, 1, 1, 1, 1, 1, 2]) should return 1', () => {
    expect(averageMark([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1);
  });
});
