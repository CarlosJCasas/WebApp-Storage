import React from 'react';
import './FooterSidebar.css';
import * as RiIcons from 'react-icons/ri';

function FooterSidebar() {
	const openConfig = () => {
		alert('Abrir panel de configuración de usuario y conexión');
	};

	const logOut = () => {
		alert('Cerrar sesión y redirigir la web a Login');
	};

	return (
		<div className='footer-sidebar'>
			<div className='perfil'>PERFIL</div>
			<div className='footer-sidebar-data'>
				<div className='img-circular'>
					<img
						alt='foto-perfil'
						src='../../imgs/profilepic.jpg'
						onClick={openConfig}
					></img>
				</div>
				<div className='footer-datos-usuario'>
					<div className='footer-nombre-usuario'>Carlos Casas Araujo</div>
					<small className='footer-rol-usuario'>Encargado</small>
				</div>
			</div>
			<div className='footer-button'>
				<button className='logout-button' onClick={logOut}>
					<RiIcons.RiLogoutBoxLine size={24} /> Log Out
				</button>
			</div>
		</div>
	);
}

export default FooterSidebar;
