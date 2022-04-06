import axios from 'axios';

export function getOperaciones() {
	try {
		const response = axios.get('http://localhost:8080/operaciones');
		return response;
	} catch (error) {
		console.error(error);
	}
}

export async function postOperacion(operacion) {
	try {
		const response = await axios.post(
			'http://localhost:8080/addoperacion',
			JSON.stringify(operacion),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}

export function deleteOperacion(operacion) {
	axios
		.delete('http://localhost:8080/deleteoperacion' + operacion.id_operacion)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.error(error.response.status);
			console.error(error);
		});
}

export function deleteMultipleOperaciones(operaciones) {
	for (var operacion of operaciones) {
		deleteOperacion(operacion);
	}
}
