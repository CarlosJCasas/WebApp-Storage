import axios from 'axios';

export async function postProducto(producto) {
	try {
		const response = await axios.post(
			'http://localhost:8080/addproducto',
			JSON.stringify(producto),
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

export function deleteProducto(producto) {
	axios
		.delete('http://localhost:8080/deleteproducto/' + producto.id_producto)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			if (error.response.status === 500) {
				alert(
					'No se puede eliminar el producto ya que existen operaciones relacionadas con él.'
				);
			}
			console.log(error);
			console.log(error.response.status);
		});
}

export function deleteMultipleProductos(productos) {
	for (var producto of productos) {
		deleteProducto(producto);
	}
}
