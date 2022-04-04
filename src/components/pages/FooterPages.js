import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import AddButton from '../AddButton';

function FooterPages(props) {
	return (
		<div className='footer-wrapper'>
			<Row id='footer-row' {...props}>
				<Col></Col>
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

FooterPages.propTypes = {
	nombre: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};
export default FooterPages;
