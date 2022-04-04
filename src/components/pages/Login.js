import React from 'react';
import './Login.css';
function Login() {
	const logIn = () => {
		alert('Logeando usuario');
	};
	return (
		<div className='login-wrapper'>
			<div className='login-panel'>
				<div className='login-header'>
					{/* Titulo y login */}

					<h1>
						<strong>Spica logo</strong>
					</h1>
					<h4>Iniciar sesión</h4>
				</div>
				<div className='login-inputs'>
					{/* Inputs  de usuario y contraseña*/}
					<form className='form-inputs' action=''>
						<div className='input-groups'>
							<label htmlFor='email'>Email</label>
							<input id='email' type='email' />
						</div>
						<div className='input-groups'>
							<label htmlFor='password'>Contraseña</label>
							<input id='password' type='password' />
						</div>
					</form>
				</div>
				<div className='login-buttons'>
					{/* Boton de login */}
					<button id='login-button' type='button' onClick={logIn}>
						Log In
					</button>
				</div>
				<div className='login-footer'>
					{/* Recuperar contraseña y registrar */}
					<a href='' className='recover'>
						Recuperar contraseña
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
