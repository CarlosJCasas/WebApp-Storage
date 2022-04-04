import React, { useState } from 'react';
import HeaderPages from './HeaderPages';
import FooterPages from './FooterPages';
import './PagesList.css';
import MaterialTable from 'material-table';
import tableIcons from '../utils/tableIcons';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

function Operaciones() {
	const [show, setShow] = useState(false);

	const handleChange = () => setShow(!show);

	var pathName = window.location.pathname;

	const nombre = pathName.slice(1, -2);

	return (
		<div className='operaciones'>
			<HeaderPages nombre={nombre} handleChange={handleChange}></HeaderPages>
			<div className='table-row'>
				<MaterialTable
					icons={tableIcons}
					title={'Proyectos'}
					columns={[
						{
							title: 'Cliente',
							field: 'cliente',
							defaultSort: 'cliente',
						},
						{ title: 'Dirección', field: 'direccion' },
						{ title: 'Nombre contacto', field: 'contacto_nombre' },
						{ title: 'Teléfono contacto', field: 'contacto_telefono' },
						{ title: 'Email contacto', field: 'contacto_email' },
					]}
					localization={{
						header: {
							actions: '',
						},
						toolbar: {
							searchTooltip: 'Buscar',
							searchPlaceholder: 'Buscar',
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
						sorting: true,
						search: true,
						actionsColumnIndex: -1,
						pageSize: 15,
						emptyRowsWhenPaging: false,
					}}
					actions={[
						{
							icon: () => <Edit />,
							tooltip: 'Editar operación',
							position: 'row',
							onClick: (event, rowData) => {
								alert('Editar operación:' + rowData.producto);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar operación',
							position: 'row',
							onClick: (event, rowData) => {
								alert('Eliminar operación: ' + rowData.producto);
							},
						},
						{
							icon: DeleteOutline,
							tooltip: 'Eliminar operación',
							position: 'toolbarOnSelect',
							onClick: (event, rowData) => {
								alert('Eliminar operación: ' + rowData.producto);
							},
						},
					]}
					detailPanel={() => {
						return (
							<div>
								<MaterialTable
									icons={tableIcons}
									title='Operaciones'
									// Aqui hay que aplicar un filtro a las operaciones que se muestran para que solo sean las que coinciden con el proyecto
									// {OperacionDataSample.filter(
									//           (row) => row.proyecto === rowData.cliente
									//         )}
									columns={[
										{
											title: 'Producto',
											field: 'producto',
											defaultSort: 'producto',
										},
										{ title: 'Tipo operación', field: 'tipo_operacion' },
										{
											title: 'Reserva salida',
											field: 'fecha_salida_reserva',
										},
										{
											title: 'Reserva entrada',
											field: 'fecha_entrada_reserva',
										},
										{ title: 'Salida', field: 'fecha_salida' },
										{ title: 'Entrada', field: 'fecha_entrada' },
									]}
									options={{
										sorting: true,
										search: true,
										actionsColumnIndex: -1,
										selection: true,
										pageSize: 5,
									}}
									localization={{
										header: {
											actions: '',
										},
										toolbar: {
											searchTooltip: 'Buscar',
											searchPlaceholder: 'Buscar',
										},
									}}
									actions={[
										{
											icon: () => <Edit />,
											tooltip: 'Editar operación',
											position: 'row',
											onClick: (event, rowData) => {
												alert('Editar operación:' + rowData.producto);
											},
										},
										{
											icon: DeleteOutline,
											tooltip: 'Eliminar operación',
											position: 'row',
											onClick: (event, rowData) => {
												alert('Eliminar operación: ' + rowData.producto);
											},
										},
										{
											icon: DeleteOutline,
											tooltip: 'Eliminar operación',
											position: 'toolbarOnSelect',
											onClick: (event, rowData) => {
												alert('Eliminar operación: ' + rowData.producto);
											},
										},
									]}
								></MaterialTable>
							</div>
						);
					}}
				></MaterialTable>
			</div>
			<FooterPages nombre={nombre} handleChange={handleChange}></FooterPages>
		</div>
	);
}

export default Operaciones;
