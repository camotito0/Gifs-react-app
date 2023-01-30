import PropTypes from 'prop-types';

export const GifItem = ({ name, url }) => {
	return (
		<div className="card">
			<img src = { url } alt = { name }/>
			<p>{ name	}</p>
		</div>
	)
}

// Agregamos ttypes a los parametros y 
// tambien le decimos que son requereidos
GifItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}