import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as UsuariosServices from '../../services/UsuariosServices';

function UsuarioForm(props) {
	const { register, handleSubmit } = useForm({
		defaultValues: {},
		shouldUseNativeValidation: true,
	});

	const onSubmit = (data) => {
		UsuariosServices.postUsuario(data);
		props.onHide();
	};
	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-user-grid'>
					<div className='form-row'>
						<div className='form-col'>
							<label htmlFor='nombre' className='floating'>
								Nombre
							</label>
							<input
								{...register('nombre', { required: true, maxLength: 30 })}
								id='nombre'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label htmlFor='apellidos' className='floating'>
								Apellidos
							</label>
							<input
								{...register('apellidos', { maxLength: 30 })}
								id='apellidos'
								type='text'
							/>
						</div>
						<div className='form-col'>
							<label htmlFor='telefono1' className='floating'>
								Teléfono
							</label>
							<input
								{...register('telefono1', { maxLength: 9 })}
								id='telefono1'
								type='tel'
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-col'>
							<label htmlFor='telefono2' className='floating'>
								Teléfono secundario
							</label>
							<input
								{...register('telefono2', { maxLength: 9 })}
								id='telefono2'
								type='tel'
							/>
						</div>
						<div className='form-col'>
							<label htmlFor='email' className='floating'>
								Email
							</label>
							<input
								{...register('email', { required: true, maxLength: 100 })}
								id='email'
								type='email'
							/>
						</div>
						<div className='form-col'>
							<label htmlFor='rol' className='floating'>
								Rol
							</label>
							<input
								{...register('rol', { maxLength: 20 })}
								id='rol'
								type='text'
							/>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-col'>
							<label htmlFor='password' className='floating'>
								Contraseña
							</label>
							<input
								{...register('password', { required: true, maxLength: 50 })}
								id='password'
								type='password'
							/>
						</div>
						<div className='form-col'>
							<label htmlFor='password2' className='floating'>
								Repetir contraseña
							</label>
							<input type='password' maxLength={50} />
						</div>
					</div>

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

UsuarioForm.propTypes = {
	onHide: propTypes.func,
};
export default UsuarioForm;
