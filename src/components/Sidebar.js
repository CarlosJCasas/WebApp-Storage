import React from 'react';
import { SidebarData } from './SidebarData';
import * as GiIcons from 'react-icons/gi';
import './Sidebar.css';
import FooterSidebar from './FooterSidebar';
import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<nav className='sidebar'>
			<div className='sidebar-container'>
				<div className='sidebar-header'>
					<NavLink to='/' className='sidebar-logo'>
						<GiIcons.GiFlexibleStar className='icon-empresa' />
						<strong>Spica</strong>
					</NavLink>
				</div>
				<div className='sidebar-menu'>
					<hr />
					{SidebarData.map((item, index) => {
						return (
							<NavLink
								id={index}
								key={index}
								to={item.path}
								className={
									window.location.pathname === item.path
										? item.cName
										: item.cName
								}
							>
								{item.icon}
								{item.title}
							</NavLink>
						);
					})}
					<hr />
				</div>
				<div className='siderbar-footer'>
					<FooterSidebar />
				</div>
			</div>
		</nav>
	);
}

export default Sidebar;
