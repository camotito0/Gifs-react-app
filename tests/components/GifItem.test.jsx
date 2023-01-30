import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Tests for the component <GifItem />', () => {
	const name = 'Valorant';
	const url =  'https://media2.giphy.com/media/yQQMjKgLhRc9Y8stQV/giphy.gif?cid=00210a5c9z1tqnlknq84zqdii1yis6kt8x9zz34hfcuu8uf2&rid=giphy.gif&ct=g'

	it('Should match the snapshot with component', () => {
		const {	container	} =	render(<GifItem name={name} url={url} />);
		expect( container ).toMatchSnapshot();
	});

	it('the tag img most contain the url and alt', () => {
		render(<GifItem name={name} url={url} />);
		const {	src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(name);
	});

	it('should render the title in a p tag', () => {
		render(<GifItem name={name} url={url} />);
		/* screen.debug(); */
		expect(screen.getByText(name)).toBeTruthy();
	});
});