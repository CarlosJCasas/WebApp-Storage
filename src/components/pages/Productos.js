import React, { useEffect, useState } from 'react';
import './PagesList.css';
import ModalForm from '../modals/ModalForm.js';
import HeaderPages from './HeaderPages';
import FooterPages from './FooterPages';
import MaterialTable from '@material-table/core';
import tableIcons from '../utils/tableIcons';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import axios from 'axios';
import QrCode from '../QrCode';
import Calendario from '../Calendario';
import * as ProductoServices from '../../services/ProductosServices';
import ProductoForm from '../forms/ProductoForm';

function Productos() {
	var pathName = window.location.pathname;
	const nombre = pathName.slice(1, -1);
	/* Datos de las columnas para la materialtable del producto */
	const columns = [
		{
			title: 'Código barras',
			field: 'codigo_barras',
		},
		{
			title: 'Nav id',
			field: 'id_nav',
		},
		{
			title: 'Grupo Nav',
			field: 'id_nav_grupo',
		},
		{ title: 'Nombre producto', field: 'nombre_producto' },
		{ title: 'Ubicación producto', field: 'ubicacion_almacen', width: '15%' },

		{
			title: 'Descripción',
			field: 'descripcion',
			width: '70%',
		},
	];
	/* Datos de las columnas para el panel de detalles del producto */
	const detailColumns = [
		{
			title: 'Alta',
			field: 'fecha_alta',
		},
		{
			title: 'Baja',
			field: 'fecha_baja',
		},
		{
			title: 'Activo',
			field: 'activo',
		},
		{
			title: 'Almacenado',
			field: 'almacenado',
		},
		{
			title: 'Url',
			field: 'url_producto',
		},
		{
			title: 'Manual',
			field: 'manual_path',
		},
	];

	/* Controlar el estado del modal*/
	const [show, setShow] = useState(false);
	const handleChange = () => setShow(!show);

	/* Productos */
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const fetchProductos = async () => {
			const result = await ProductoServices.getProductos();
			setProductos(result.data);
		};
		fetchProductos();
	}, []);

	/* Listado de operaciones y el useEffect llamando a la base de datos */
	const [operaciones, setOperaciones] = useState([]);
	useEffect(() => {
		const fetchOps = async () => {
			let url = 'http://localhost:8080/operaciones';
			const result = await axios.get(url);
			setOperaciones(JSON.parse(result.data));
		};
		fetchOps();
	}, []);

	/* Crea un listado de objetos para el calendario con los productos y las operaciones */
	const [objetosFecha, setObjectosFecha] = useState(new Map());
	useEffect(() => {
		let mapTemp = new Map();
		for (let producto of productos) {
			let datatemp = [];
			for (let operacion of operaciones) {
				if (
					producto.id_producto === operacion.producto.id_producto &&
					operacion.tipo_operacion.trim() === 'reserva'
				) {
					let newObject = {};
					newObject.id = operacion.id_operacion;
					newObject.name = operacion.proyecto.cliente;
					newObject.location = operacion.proyecto.direccion;
					newObject.startDate = new Date(operacion.fecha_prev_salida).getTime();
					newObject.endDate = new Date(operacion.fecha_prev_entrada).getTime();
					datatemp.push(newObject);
				}
			}
			mapTemp.set(producto.id_producto, datatemp);
		}

		setObjectosFecha(mapTemp);
	}, [operaciones, productos]);

	return (
		<div className='productos'>
			<HeaderPages nombre={nombre} handleChange={handleChange}></HeaderPages>
			<div className='table-row'>
				<MaterialTable
					icons={tableIcons}
					title={'Productos'}
					data={productos}
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
						detailPanelType: 'single',
						paging: true,
						emptyRowsWhenPaging: false,
						sorting: false,
						draggable: false,
						search: true,
						actionsColumnIndex: -1,
						selection: true,
						pageSize: 10,
						paginationType: 'normal',
						headerStyle: {
							zIndex: 2,
						},
						rowStyle: {
							zIndex: 2,
						},
					}}
					actions={[
						{
							icon: Edit,
							tooltip: 'Editar producto',
							position: 'row',
							onClick: (event, rowData) => {
								/* Deberia aparecer un modal con toda la información del producto para poder modificar menos 
								el codigo de barras y el nombre del producto, si es otro producto deberias crear uno nuevo  */
								alert('Editar producto:' + rowData.nombre_producto);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar producto',
							position: 'row',
							onClick: (event, rowData) => {
								console.log(rowData);
								ProductoServices.deleteProducto(rowData);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar producto',
							position: 'toolbarOnSelect',
							onClick: (event, rowData) => {
								ProductoServices.deleteMultipleProductos(rowData);
							},
						},
					]}
					// Panel de detalle mejor sin material table, usar campos normales para los datos y añadir el QR
					detailPanel={(rowData, index) => {
						console.log(rowData.rowData);
						console.log(operaciones);
						return (
							<div className='container-detailpanel'>
								<div className='detailpanel-firstrow'>
									<QrCode
										value={JSON.stringify(rowData.rowData.codigo_barras)}
									/>
									<div className='detailpanel-table'>
										<MaterialTable
											key={index}
											title={''}
											data={[rowData.rowData]}
											columns={detailColumns}
											options={{
												toolbar: false,
												emptyRowsWhenPaging: false,
												search: false,
												paging: false,
												sorting: false,
												draggable: false,
											}}
										/>
									</div>
								</div>
								<div className='detailpanel-calendar'>
									<Calendario
										dataSource={objetosFecha.get(rowData.rowData.id_producto)}
									/>
								</div>
							</div>
						);
					}}
				></MaterialTable>
			</div>
			<FooterPages nombre={nombre} handleChange={handleChange}></FooterPages>
			<ModalForm nombre={nombre} show={show} onHide={handleChange}>
				<ProductoForm onHide={handleChange} />
			</ModalForm>
		</div>
	);
}

export default Productos;
