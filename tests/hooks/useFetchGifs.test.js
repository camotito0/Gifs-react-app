import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing useFetchGifs hook', () => {
	it('Should return the initial state', () => {
		const { result } = renderHook(() => useFetchGifs('Valorant') );
		const { current} = result;

		expect( current.images.length ).toBe(0);
		expect( current.isLoading ).toBeTruthy();
	});

	it('Should return an array of images and loading in state false', async () => {
		const { result } = renderHook(() => useFetchGifs('Valorant') );

		/* con el waitFor le decimos que espere a que useFethc haga algo 
			y que espere el resultado del expect */ 
		await waitFor (
			() => expect( result.current.images.length ).toBeGreaterThan(0)
		);

		const { current } = result;

		expect( current.images.length ).toBeGreaterThan(0);
		expect( current.isLoading ).toBeFalsy();
	});
	 
});