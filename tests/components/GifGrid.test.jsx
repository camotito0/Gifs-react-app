import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing component <GifGird/>', () => {
	
	const category = 'Valorant';

	it('Should render the loading initialy', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={ category } />)
		expect( screen.getByText( 'Cargando...') );
		expect( screen.getByText(category) );
	});

	it('Should render items when is load the images from the useFetchGifs', () => {

		const gifs = [
			{
			id: 'abc',
			name: 'Valorant',
			url: 'hhtp/valorant.com'
			},
			{
				id: 'abc',
				name: 'One punch',
				url: 'hhtp/onepunch.com'
			}
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: true,
		});

		render(<GifGrid category={ category } />)
		expect( screen.getAllByRole('img').length ).toBe(2)
		/* screen.debug() */

	});
});