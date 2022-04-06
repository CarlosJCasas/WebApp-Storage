import axios from 'axios';

export function getUsuarios() {
	try {
		const response = axios.get('http://localhost:8080/usuarios');
		return response;
	} catch (error) {
		console.error(error);
	}
}

export async function postUsuario(usuario) {
	try {
		const response = await axios.post(
			'http://localhost:8080/addusuario',
			JSON.stringify(usuario),
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

export function deleteUsuario(usuario) {
	axios
		.delete('http://localhost:8080/deleteusuario/' + usuario.id_usuario)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.error(error);
			console.error(error.response.status);
		});
}

export function deleteMultipleUsuarios(usuarios) {
	for (var usuario of usuarios) {
		deleteUsuario(usuario);
	}
}
