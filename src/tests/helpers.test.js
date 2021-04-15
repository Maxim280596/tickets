import { getDurationToString, getTimeToString } from "../helpers";

it('getTimeToString(10,10) to be 03:00 - 03:10', () => {
  expect(getTimeToString(10, 10)).toBe("03:00 - 03:10");
});

it('getDurationToString(100) to be 1ч 40м', () => {
  expect(getDurationToString(100)).toBe("1ч 40м");
});