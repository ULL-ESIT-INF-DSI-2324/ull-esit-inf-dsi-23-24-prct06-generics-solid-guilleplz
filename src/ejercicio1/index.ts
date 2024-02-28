import { Caja } from "./caja";

const caja1 = new Caja<{ nombre: string }>();
caja1.agregarEnser({ nombre: 'Vajilla' });
caja1.agregarEnser({ nombre: 'Ropa' });
console.log(caja1.listarContenido());

const enserBuscado = caja1.buscarEnserPorNombre('Ropa');
if (enserBuscado) {
  console.log(`Enser encontrado: ${enserBuscado.nombre}`);
}

caja1.eliminarEnser({ nombre: 'Vajilla' });
console.log(caja1.listarContenido());