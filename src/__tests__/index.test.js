import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

const mockValues = {
	min: 15,
	max: 200,
	value: 108,
	format: 'currency',
	unit: 'GBP',
};

const mockError = {
	error: 'The server is on fire',
};

describe('Home', () => {
	test('Should show min, max, value', () => {
		render(<Home data={mockValues} />);

		const min = screen.getByText(mockValues.min);
		const max = screen.getByText(mockValues.max);
		const value = screen.getByText(mockValues.value);

		expect(min).toBeInTheDocument();
		expect(max).toBeInTheDocument();
		expect(value).toBeInTheDocument();
	});

	test('Should have min, max, value & currency as accessible values', () => {
		render(<Home data={mockValues} />);

		const unit = screen.getByTestId('meter-unit');
		const meter = screen.getByTestId('meter');

		expect(meter).toHaveAttribute('min', `${mockValues.min}`);
		expect(meter).toHaveAttribute('max', `${mockValues.max}`);
		expect(meter).toHaveAttribute('value', `${mockValues.value}`);
		expect(unit).toHaveTextContent(mockValues.unit);
	});

	test('Should show error if data fails to load', () => {
		render(<Home data={mockError} />);

		const status = screen.getByRole('status');

		expect(status).toBeInTheDocument();
		expect(status).toHaveTextContent(/Please refresh the page/);
	});
});
