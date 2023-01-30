import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in the component <AddCategory/>', () => {
	
	const inputValue = 'Valorant';

	it('Should change the value of the text box', () => {
		/* addCategory recibe una función, no testeamos 
		esa función sino testeamos el comportamiento del componente */
		render(<AddCategory onNewCategory={() => {}} />)
		/* seleccionamos el elemento input */		
		const input = screen.getByRole('textbox');
		/* disparamos el evento */
		fireEvent.input( input, { target: { value: inputValue }} );
		/* verificamos el comportamiento del input */
		expect( input.value	).toBe('Valorant');
		/* screen.debug(); */
	});

	it('Should call onNewCategory if the input have value', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={ onNewCategory } />)
		
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input( input, { target: { value: inputValue }} );
		fireEvent.submit( form );

		expect( input.value ).toBe( '' );
		expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
		expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
		/* screen.debug();  */
	});

	it('Shouldnt have been called if the input is empty', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={ onNewCategory } />)
		
		const form = screen.getByRole('form');
		fireEvent.submit( form );

		expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
		/* screen.debug(); */
	});
}); 