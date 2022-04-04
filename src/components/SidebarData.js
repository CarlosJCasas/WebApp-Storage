import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'sidebar-link',
	},
	{
		title: 'Productos',
		path: '/productos',
		icon: <FaIcons.FaBoxes />,
		cName: 'sidebar-link',
	},
	{
		title: 'Proyectos',
		path: '/proyectos',
		icon: <GoIcons.GoFileSubmodule />,
		cName: 'sidebar-link',
	},
	{
		title: 'Usuarios',
		path: '/usuarios',
		icon: <FaIcons.FaUsers />,
		cName: 'sidebar-link',
	},
	{
		title: 'Operaciones',
		path: '/operaciones',
		icon: <FaIcons.FaSitemap />,
		cName: 'sidebar-link',
	},
];
