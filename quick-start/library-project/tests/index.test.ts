import { upperCase } from '@/index';

describe('upperCase cases', () => {
  test('upperCase', () => {
    expect(upperCase('abc')).toBe('ABC')
  });
});
