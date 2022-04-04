import React from 'react';
import './FooterSidebar.css';
import * as RiIcons from 'react-icons/ri';

function FooterSidebar() {
	return (
		<div className='footer-sidebar'>
			<div className='perfil'>PERFIL</div>
			<div className='footer-sidebar-data'>
				<div className='img-circular'>
					<img alt='foto-perfil' src='../../imgs/profilepic.jpg'></img>
				</div>
				<div className='footer-datos-usuario'>
					<div className='footer-nombre-usuario'>Carlos Casas Araujo</div>
					<small className='footer-rol-usuario'>Encargado</small>
				</div>
			</div>
			<div className='footer-button'>
				<button className='logout-button'>
					<RiIcons.RiLogoutBoxLine size={24} /> Log Out
				</button>
			</div>
		</div>
	);
}

export default FooterSidebar;
