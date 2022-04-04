import React from 'react';
import './Login.css';
import * as FaIcons from 'react-icons/fa';
function Login() {
	const logIn = () => {
		alert('Logeando usuario y abrir la página Home');
	};

	const recuperarPass = () => {
		alert('Recuperar contraseña para el usuario');
	};
	return (
		<div className='login-wrapper'>
			<div className='login-panel'>
				<div className='login-header'>
					{/* Titulo y login */}
					<div className='login-logo'>
						<icon className='logo'>
							<FaIcons.FaWarehouse />
						</icon>
						<strong>Warehouse Manager</strong>
					</div>
				</div>
				<div className='login-inputs'>
					{/* Inputs  de usuario y contraseña*/}
					<h4>Iniciar sesión</h4>
					<form className='form-inputs' action=''>
						<div className='input-groups'>
							<label className='login-label' htmlFor='email'>
								Email
							</label>
							<input id='email' type='email' />
						</div>
						<div className='input-groups'>
							<label className='login-label' htmlFor='password'>
								Contraseña
							</label>
							<input id='password' type='password' />
						</div>
					</form>
					<div className='login-buttons'>
						{/* Boton de login */}
						<button id='login-button' type='button' onClick={logIn}>
							Log In
						</button>
					</div>
				</div>

				<div className='login-footer'>
					{/* Recuperar contraseña y registrar */}
					<a href='#' className='recuperar' onClick={recuperarPass}>
						Recuperar contraseña
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
