import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';

function HeaderPages(props) {
	return (
		<div className='header-wrapper'>
			<Row id='header-row' {...props}>
				<Col id='header-col-buscar'></Col>
				<Col id='header-col-addbutton'>
					<AddButton
						id='add-button'
						nombre={props.nombre}
						onClick={props.handleChange}
					/>
				</Col>
			</Row>
		</div>
	);
}
HeaderPages.propTypes = {
	nombre: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};
export default HeaderPages;
