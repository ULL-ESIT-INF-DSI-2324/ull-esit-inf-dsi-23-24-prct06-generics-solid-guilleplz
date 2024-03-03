import { Caja } from "./caja";

// Crear una caja de enseres con nombre
const caja1 = new Caja<{ nombre: string }>();
caja1.agregarEnser({ nombre: 'Vajilla' });
caja1.agregarEnser({ nombre: 'Ropa' });
// Listar el contenido de la caja
console.log(caja1.listarContenido());

// Buscar un enser en la caja por nombre
const enserBuscado = caja1.buscarEnserPorNombre('Ropa');
if (enserBuscado) {
  console.log(`Enser encontrado: ${enserBuscado.nombre}`);
}

// Eliminar un enser de la caja por nombre
caja1.eliminarEnser({ nombre: 'Vajilla' });
// Listar el contenido de la caja
console.log(caja1.listarContenido());