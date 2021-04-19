import { getDurationToString, getTimeToString } from '../helpers';

it('should getTimeToString(10,10) to be return 03:00 - 03:10', () => {
  expect(getTimeToString(10, 10)).toBe('03:00 - 03:10');
});

it('should getDurationToString(100) to be return 1ч 40м', () => {
  expect(getDurationToString(100)).toBe('1ч 40м');
});
