import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function ProyectoForm(props) {
	const { register, handleSubmit } = useForm({
		defaultValues: {},
		shouldUseNativeValidation: true,
	});

	const onSubmit = (data) => {
		// Llamar al ProyectoServices POST
		alert(JSON.stringify(data));
		props.onHide();
	};
	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-grid'>
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating' htmlFor='cliente'>
								Cliente
							</label>
							<input
								{...register('cliente', { required: true, maxLength: 100 })}
								id='cliente'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label className='floating' htmlFor='id_nav_proyecto'>
								Id nav proyecto
							</label>
							<input
								{...register('id_nav_proyecto', {
									required: true,
									maxLength: 15,
								})}
								id='id_nav_proyecto'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label className='floating' htmlFor='comercial'>
								Comercial
							</label>
							<input
								{...register('comercial', { required: true, maxLength: 100 })}
								id='comercial'
								type='text'
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating' htmlFor='direccion'>
								Direccion
							</label>
							<input
								{...register('direccion', { maxLength: 100 })}
								id='direccion'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label className='floating' htmlFor='provincia'>
								Provincia
							</label>
							<input
								{...register('provincia', { maxLength: 50 })}
								id='provincia'
								type='text'
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating' htmlFor='contacto_nombre'>
								Nombre contacto
							</label>
							<input
								{...register('contacto_nombre', { maxLength: 50 })}
								id='contacto_nombre'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label className='floating' htmlFor='contacto_telefono'>
								Telefono
							</label>
							<input
								{...register('contacto_telefono')}
								id='contacto_telefono'
								type='phone'
							/>
						</div>
						<div className='form-col'>
							<label className='floating' htmlFor='contacto_email'>
								Email
							</label>
							<input
								{...register('contacto_email', { maxLength: 255 })}
								id='contacto_email'
								type='email'
							/>
						</div>
					</div>
					<hr className='modal-hr' />
					<div className='form-row' id='button-row'>
						<button
							className='buttonCancel'
							type='button'
							onClick={props.onHide}
						>
							Cancelar
						</button>
						<button className='buttonAcept' type='submit'>
							Aceptar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

ProyectoForm.propTypes = {
	onHide: propTypes.func,
};

export default ProyectoForm;
