type GetDegrees = {
	min: number;
	max: number;
	value: number;
};

/**
 * Needle is in the middle by default so we will get a maximum of -90deg / +90deg
 * reflecting the where the value is in the range
 */
export const getGuageDegrees = ({ min, max, value }: GetDegrees) => {
	// the api sometimes returns values outside of the supplied ranges
	if (min >= max) return 180; // 'hides' the needle
	if (value <= min) return -90;
	if (value >= max) return 90;

	const fr = (value - min) / (max - min);
	return fr * 180 - 90;
};
