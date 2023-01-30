import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing component <GifExpertApp/>', () => {

	const inputValue = 'Valorant';

	it('Should render the component', () => {
		render(<GifExpertApp />);

		expect( screen.getAllByText('Gif Expert App') ).toBeTruthy();
		expect( screen.getByRole('form') ).toBeTruthy();
		expect( screen.getByRole('textbox') ).toBeTruthy();
	});
	
	it('The state of categories should change and the grid should render when input form is submited', async () => {
		render(<GifExpertApp />);
		const form = screen.getByRole('form');
		const input = screen.getByRole('textbox');

		fireEvent.input( input, { target: { value: inputValue }} );
		fireEvent.submit( form );

		expect( (await screen.findAllByRole('img')).length ).toBeGreaterThanOrEqual(1);
	});

	it('When the user types the word for second time the grid just should render one', async () => {
		render(<GifExpertApp />);
		const form = screen.getByRole('form');
		const input = screen.getByRole('textbox');

		fireEvent.input( input, { target: { value: inputValue }} );
		fireEvent.submit( form );
		fireEvent.input( input, { target: { value: inputValue }} );
		fireEvent.submit( form );

		expect( (await screen.findAllByRole('img')).length ).toBeLessThanOrEqual(10);
	});
});