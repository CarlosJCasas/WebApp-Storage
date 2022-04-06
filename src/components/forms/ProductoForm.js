import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as IoIcons from 'react-icons/io5';
import * as ProductoServices from '../../services/ProductosServices';

function ProductoForm(props) {
	const [codigobarras, setCodigoBarras] = useState('');

	/* Genera un codigo para el codigo de barras y QR */
	function generarCodigo() {
		var n = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
		setCodigoBarras(n);
	}

	/* Registra y sumbit el form, define los valores por defecto. Aplica la validación por defecto de los input */
	const { register, handleSubmit } = useForm({
		defaultValues: {
			ubicacion_almacen: '',
			url_prod: '',
			manual_path: '',
			fecha_alta: new Date().toISOString(),
			fecha_baja: null,
			descripcion: '',
		},
		shouldUseNativeValidation: true,
	});

	const onSubmit = (data) => {
		ProductoServices.postProducto(data);
		props.onHide();
		console.log(JSON.stringify(data));
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Filas */}
				<div className='form-grid'>
					<div className='form-row'>
						<div className='form-col'>
							<div className='codigo-header'>
								<label className='floating'>Código de barras</label>
								<button
									className='reload-button'
									type='button'
									onClick={generarCodigo}
								>
									<IoIcons.IoReloadCircleOutline size={22} />
								</button>
							</div>
							<input
								{...register('codigo_barras', { required: true })}
								type='number'
								value={codigobarras}
								readOnly={true}
							></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Nombre producto</label>
							<input
								{...register('nombre_producto', {
									required: true,
									maxLength: 50,
								})}
								type='text'
							></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Id nav</label>
							<input
								{...register('id_nav', { required: true, maxLength: 11 })}
								type='text'
							></input>
						</div>
					</div>
					{/* Filas */}
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating'>Id grupo nav</label>
							<input
								{...register('id_nav_grupo', { required: true, maxLength: 20 })}
								type='text'
							></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Ubicación almacén</label>
							<input
								{...register('ubicacion_almacen', { maxLength: 20 })}
								type='text'
							></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Url producto</label>
							<input
								{...register('url_prod', { maxLength: 100 })}
								type='text'
							></input>
						</div>
					</div>
					{/* Filas */}
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating'>Ruta manual</label>
							<input
								{...register('manual_path', { maxLength: 100 })}
								type='text'
							></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Fecha alta</label>
							<input {...register('fecha_alta')} type='date'></input>
						</div>
						<div className='form-col'>
							<label className='floating'>Fecha baja</label>
							<input {...register('fecha_baja')} type='date'></input>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-row-checkbox'>
							<div className='form-col-checkbox'>
								<label type='checkbox'>Activo</label>
								<input type='checkbox' {...register('activo')} />
							</div>
							<div className='form-col-checkbox'>
								<label type='checkbox'>Almacenado</label>
								<input type='checkbox' {...register('almacenado')} />
							</div>
						</div>
					</div>
					{/* Filas */}
					<div className='form-row'>
						<div className='form-col'>
							<label className='floating'>Descripción</label>
							<input
								{...register('descripcion', { maxLength: 200 })}
								as='textarea'
								type='text'
								style={{ height: '100px' }}
							></input>
						</div>
					</div>
					<hr className='modal-hr' />
					<div id='button-row' className='form-row'>
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

ProductoForm.propTypes = {
	onHide: propTypes.func,
};

export default ProductoForm;
