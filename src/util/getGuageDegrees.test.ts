import { getGuageDegrees } from './getGuageDegrees';

describe('getGuageDegrees', () => {
	test('Should return -90 degrees when value lower than lower min', () => {
		expect(getGuageDegrees({ min: 10, max: 100, value: 7 })).toBe(-90);
	});

	test('Should return -90 degrees when value equal to lower min', () => {
		expect(getGuageDegrees({ min: 10, max: 100, value: 10 })).toBe(-90);
	});

	test('Should return 90 degrees when value greater than upper limit', () => {
		expect(getGuageDegrees({ min: 10, max: 100, value: 500 })).toBe(90);
	});

	test('Should return 90 degrees when value equal to upper limit', () => {
		expect(getGuageDegrees({ min: 10, max: 100, value: 100 })).toBe(90);
	});

	test('Should return 0 degrees when value is in the middle of the range', () => {
		expect(getGuageDegrees({ min: 10, max: 110, value: 60 })).toBe(0);
	});

	test('Should return 45 degrees when value is in the 3/4 of the range', () => {
		expect(getGuageDegrees({ min: 10, max: 110, value: 85 })).toBe(45);
	});

	test('Should return 180 degrees when max is lower than min (to hide the needle)', () => {
		expect(getGuageDegrees({ min: 100, max: 10, value: 85 })).toBe(180);
	});

	test('Should return 180 degrees when max is equal to min (to hide the needle)', () => {
		expect(getGuageDegrees({ min: 100, max: 100, value: 85 })).toBe(180);
	});
});
