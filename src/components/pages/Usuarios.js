import React, { useEffect, useState } from 'react';
import './PagesList.css';
import HeaderPages from './HeaderPages';
import FooterPages from './FooterPages';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import tableIcons from '../utils/tableIcons';
import axios from 'axios';

function Usuarios() {
	var pathName = window.location.pathname;
	const nombre = pathName.slice(1, -1);
	const [show, setShow] = useState(false);
	const handleChange = () => setShow(!show);
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		const fetchUsuarios = async () => {
			let url = 'http://localhost:8080/usuarios';
			const result = await axios.get(url);
			setUsuarios(result.data);
		};
		fetchUsuarios();
	});

	return (
		<div className='usuarios'>
			<HeaderPages nombre={nombre} handleChange={handleChange}></HeaderPages>
			<div className='table-row'>
				<MaterialTable
					icons={tableIcons}
					title={'Usuarios'}
					data={usuarios}
					columns={[
						{ title: 'Nombre', field: 'nombre' },
						{ title: 'Apellidos', field: 'apellidos' },
						{ title: 'Teléfono 1', field: 'telefono1' },
						{ title: 'Teléfono 2', field: 'telefono2' },
						{ title: 'Email', field: 'email' },
						{ title: 'Rol', field: 'rol' },
					]}
					localization={{
						header: {
							actions: '',
						},
						toolbar: {
							searchTooltip: 'Buscar',
							searchPlaceholder: 'Buscar',
							nRowsSelected: '{0} datos seleccionados',
						},
						body: {
							emptyDataSourceMessage: 'No hay datos para mostrar',
						},
						pagination: {
							labelDisplayedRows: '{from}-{to} de {count}',
							labelRowsSelect: 'filas',
						},
					}}
					options={{
						search: true,
						actionsColumnIndex: -1,
						selection: true,
						pageSize: 10,
						emptyRowsWhenPaging: false,
					}}
					actions={[
						{
							icon: () => <Edit />,
							tooltip: 'Editar usuario',
							position: 'row',
							onClick: (event, rowData) => {
								alert('Editar usuario:' + rowData.nombre_user);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar usuario',
							position: 'row',
							onClick: (event, rowData) => {
								alert('Eliminar usuario: ' + rowData.nombre_user);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar usuario',
							position: 'toolbarOnSelect',
							onClick: (event, rowData) => {
								alert('Eliminar usuario: ' + rowData.nombre_user);
							},
						},
					]}
				></MaterialTable>
			</div>
			<FooterPages nombre={nombre} handleChange={handleChange}></FooterPages>
		</div>
	);
}

export default Usuarios;
