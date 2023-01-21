export const GifItem = ({ name, url }) => {
	return (
			<div className="card">
				<img src = { url } alt = { name }/>
				<p>{ name	}</p>
			</div>
	)
}