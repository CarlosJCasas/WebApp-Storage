import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './ModalForms.css';
import PropTypes from 'prop-types';

/* Modal, ¿sirve para todos los forms? */
function ModalForm(props) {
	return (
		<Modal
			{...props}
			id='modal-principal'
			backdrop='static'
			keyboard={false}
			size='lg'
		>
			<Modal.Header closeButton>
				<Modal.Title>Añadir {props.nombre}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
		</Modal>
	);
}

ModalForm.propTypes = {
	nombre: PropTypes.string,
	children: PropTypes.object,
};
export default ModalForm;
