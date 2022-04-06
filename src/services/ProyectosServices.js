import axios from 'axios';

export async function postProyecto(proyecto) {
	try {
		const response = await axios.post(
			'http://localhost:8080/addproyecto',
			JSON.stringify(proyecto),
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

export function deleteProyecto(proyecto) {
	axios
		.delete('http://localhost:8080/deleteproyecto/' + proyecto.id_proyecto)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.error(error);
			console.error(error.response.status);
		});
}

export function deleteMultipleProyectos(proyectos) {
	for (var proyecto of proyectos) {
		deleteProyecto(proyecto);
	}
}
