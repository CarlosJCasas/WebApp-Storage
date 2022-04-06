import React, { useEffect, useState } from 'react';
import './PagesList.css';
import HeaderPages from './HeaderPages';
import FooterPages from './FooterPages';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import tableIcons from '../utils/tableIcons';
import axios from 'axios';
import * as UsuariosServices from '../../services/UsuariosServices';
import ModalForm from '../modals/ModalForm';
import UsuarioForm from '../forms/UsuarioForm';
function Usuarios() {
	var pathName = window.location.pathname;
	const nombre = pathName.slice(1, -1);

	const columns = [
		{ title: 'Nombre', field: 'nombre' },
		{ title: 'Apellidos', field: 'apellidos' },
		{ title: 'Teléfono 1', field: 'telefono1' },
		{ title: 'Teléfono 2', field: 'telefono2' },
		{ title: 'Email', field: 'email' },
		{ title: 'Rol', field: 'rol' },
	];
	const [show, setShow] = useState(false);
	const handleChange = () => setShow(!show);

	const [usuarios, setUsuarios] = useState([]);
	useEffect(() => {
		const fetchUsuarios = async () => {
			const result = await UsuariosServices.getUsuarios();
			setUsuarios(result.data);
		};
		fetchUsuarios();
	}, []);

	return (
		<div className='usuarios'>
			<HeaderPages nombre={nombre} handleChange={handleChange}></HeaderPages>
			<div className='table-row'>
				<MaterialTable
					icons={tableIcons}
					title={'Usuarios'}
					data={usuarios}
					columns={columns}
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
								UsuariosServices.deleteUsuario(rowData);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar usuario',
							position: 'toolbarOnSelect',
							onClick: (event, rowData) => {
								UsuariosServices.deleteMultipleUsuarios(rowData);
							},
						},
					]}
				></MaterialTable>
			</div>
			<FooterPages nombre={nombre} handleChange={handleChange}></FooterPages>
			<ModalForm nombre={nombre} show={show} onHide={handleChange}>
				<UsuarioForm onHide={handleChange}></UsuarioForm>
			</ModalForm>
		</div>
	);
}

export default Usuarios;
