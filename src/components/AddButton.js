import React from 'react';
import PropTypes from 'prop-types';
import './AddButton.css';

function AddButton(props) {
	return (
		<div className='addbutton-wrapper' {...props}>
			<button className='addbutton' onClick={props.handleClick}>
				Añadir {props.nombre}
			</button>
		</div>
	);
}

AddButton.propTypes = {
	nombre: PropTypes.string,
	handleClick: PropTypes.func,
};
export default AddButton;
