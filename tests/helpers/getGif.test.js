import { getGifs } from "../../src/helpers/getGifs";

describe('Tests in helper getGifs', () => {
	it('Should return an array of gifs', async () => {
		const gifs = await getGifs('Valorant');
		expect( gifs.length ).toBeGreaterThan(0);
		expect( gifs[0] ).toEqual({
			id: expect.any(String),
			name: expect.any(String),
			url: expect.any(String),
		});
	});
});