import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({	category }) => {

	const { images, isLoanding } = useFetchGifs( category );

	return (
		<>
			<h3>{ category }</h3>
			{ isLoanding && (<h2>Cargando...</h2>) }
			<div className="card-grid">
				{images.map( (img) => (
					<GifItem 
						key = { img.id }
						{ ...img }
					/>
				))}
			</div>
		</>
	)
}