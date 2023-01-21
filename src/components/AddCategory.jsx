import { useState } from "react"

export const AddCategory = ({	onNewCategory	}) => {

	const [inputValue, setInputValue] = useState('')

	const onInputChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleInput = (e) => {
		e.preventDefault()
		if(inputValue.trim().length <= 1) return ;
		onNewCategory(inputValue.trim())
		setInputValue('')
	}

	return (
		<form onSubmit= { handleInput }>
			<input
				type = 'text'
				placeholder = 'Buscar gifs'
				value = { inputValue }
				onChange = { onInputChange }
			/>
		</form>
	)
}