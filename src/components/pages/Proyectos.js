import React, { useEffect, useState } from 'react';
import './PagesList.css';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import HeaderPages from './HeaderPages';
import FooterPages from './FooterPages';
import MaterialTable from 'material-table';
import axios from 'axios';
import tableIcons from '../utils/tableIcons';
import ModalForm from '../modals/ModalForm';
import ProyectoForm from '../forms/ProyectoForm';
import * as ProyectosServices from '../../services/ProyectosServices';

function Proyectos() {
	var pathName = window.location.pathname;
	const nombre = pathName.slice(1, -1);

	/* Datos de las columnas para la tabla */
	const columns = [
		{ title: 'Cliente', field: 'cliente' },
		{ title: 'Id nav', field: 'id_nav_proyecto' },
		{ title: 'Dirección', field: 'direccion' },
		{ title: 'Nombre contacto', field: 'contacto_nombre' },
		{ title: 'Teléfono contacto', field: 'contacto_telefono' },
		{ title: 'Email contacto', field: 'contacto_email' },
	];

	/* Datos para el panel de detalle de la tabla */
	const detailPanelColumns = [
		{
			title: 'Producto',
			field: 'producto.nombre_producto',
		},
		{
			title: 'Operación',
			field: 'tipo_operacion',
		},
		{
			title: 'Fecha salida prevista',
			field: 'fecha_prev_salida',
		},
		{
			title: 'Fecha entrada prevista',
			field: 'fecha_prev_entrada',
		},
		{
			title: 'Fecha salida',
			field: 'fecha_salida',
		},
		{
			title: 'Fecha entrada',
			field: 'fecha_entrada',
		},
		{
			title: 'Usuario registro',
			field: 'id_user_registro',
		},
		{
			title: 'Usuario encargado',
			field: 'id_user_encargado',
		},
	];

	/* Controlador del estado del modal */
	const [show, setShow] = useState(false);
	const handleChange = () => setShow(!show);

	/* Listado de poryectos y la peticion a la base de datos */
	const [proyectos, setProyectos] = useState([]);
	useEffect(() => {
		const fetchProyectos = async () => {
			let url = 'http://localhost:8080/proyectos';
			const result = await axios.get(url);
			setProyectos(result.data);
		};
		fetchProyectos();
	}, []);

	/* Listado de operaciones y peticion a la base de datos */
	const [operaciones, setOperaciones] = useState([]);
	useEffect(() => {
		const fetchOperaciones = async () => {
			let url = 'http://localhost:8080/operaciones';
			const result = await axios.get(url);
			setOperaciones(JSON.parse(result.data));
		};
		fetchOperaciones();
	}, []);

	/* Mapeo de las operaciones que corresponden a cada proyecto */
	const [map, setMap] = useState(new Map());
	useEffect(() => {
		let mapTemp = new Map();
		for (let proyecto of proyectos) {
			let dataTemp = [];
			for (let operacion of operaciones) {
				if (proyecto.id_proyecto === operacion.proyecto.id_proyecto) {
					dataTemp.push(operacion);
				}
			}
			mapTemp.set(proyecto.id_proyecto, dataTemp);
		}
		setMap(mapTemp);
	}, [operaciones, proyectos]);

	return (
		<div className='proyectos'>
			<HeaderPages nombre={nombre} handleChange={handleChange}></HeaderPages>
			<div className='table-row'>
				<MaterialTable
					icons={tableIcons}
					title={'Proyectos'}
					columns={columns}
					data={proyectos}
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
						detailPanelType: 'single',
						search: true,
						actionsColumnIndex: -1,
						emptyRowsWhenPaging: false,
						selection: true,
						pageSize: 10,
						draggable: false,
					}}
					actions={[
						{
							icon: () => <Edit />,
							tooltip: 'Editar proyecto',
							position: 'row',
							onClick: (event, rowData) => {
								alert('Editar proyecto: ' + rowData.cliente);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar proyecto',
							position: 'row',
							onClick: (event, rowData) => {
								console.log(rowData);
								ProyectosServices.deleteProyecto(rowData);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar proyecto',
							position: 'toolbarOnSelect',
							onClick: (event, rowData) => {
								ProyectosServices.deleteMultipleProyectos(rowData);
							},
						},
					]}
					detailPanel={(rowData, index) => {
						return (
							<div className='container-detailpanel'>
								<div className='detailpanel-table'>
									<MaterialTable
										key={index}
										icons={tableIcons}
										title={'Operaciones'}
										options={{
											detailPanelType: 'single',
											toolbar: false,
											emptyRowsWhenPaging: false,
											paging: false,
											sorting: false,
											draggable: false,
										}}
										columns={detailPanelColumns}
										//Data de esto son las operaciones que se relacionan con el proyecto
										data={map.get(rowData.id_proyecto)}
									/>
								</div>
							</div>
						);
					}}
				></MaterialTable>
			</div>
			<FooterPages nombre={nombre} handleChange={handleChange}></FooterPages>
			<ModalForm nombre={nombre} show={show} onHide={handleChange}>
				<ProyectoForm onHide={handleChange}></ProyectoForm>
			</ModalForm>
		</div>
	);
}

export default Proyectos;
