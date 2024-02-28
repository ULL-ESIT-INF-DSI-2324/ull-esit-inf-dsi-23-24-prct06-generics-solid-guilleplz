import 'mocha';
import { expect } from "chai";
import { Caja } from "../../src/ejercicio1/caja";

describe('Caja', () => {
  it('debería agregar y listar enseres correctamente', () => {
    const caja = new Caja<{ nombre: string }>();
    caja.agregarEnser({ nombre: 'Vajilla' });
    caja.agregarEnser({ nombre: 'Ropa' });

    const contenidoEsperado = ['Vajilla', 'Ropa'];
    const contenidoReal = caja.listarContenido().map(enser => enser);

    expect(contenidoReal).to.deep.equal(contenidoEsperado);
  });

  it('debería buscar enser por nombre correctamente', () => {
    const caja = new Caja<{ nombre: string }>();
    caja.agregarEnser({ nombre: 'Vajilla' });
    caja.agregarEnser({ nombre: 'Ropa' });

    const enserBuscado = caja.buscarEnserPorNombre('Ropa');

    expect(enserBuscado).to.exist;
    expect(enserBuscado!.nombre).to.equal('Ropa');
  });

  it('debería eliminar enser correctamente', () => {
    const caja = new Caja<{ nombre: string }>();
    caja.agregarEnser({ nombre: 'Vajilla' });
    caja.agregarEnser({ nombre: 'Ropa' });

    caja.eliminarEnser({ nombre: 'Vajilla' });

    const contenidoEsperado = ['Ropa'];
    const contenidoReal = caja.listarContenido().map(enser => enser);

    expect(contenidoReal).to.deep.equal(contenidoEsperado);
  });

  it('debería manejar adecuadamente la búsqueda de enser no existente', () => {
    const caja = new Caja<{ nombre: string }>();
    caja.agregarEnser({ nombre: 'Vajilla' });
    caja.agregarEnser({ nombre: 'Ropa' });

    const enserBuscado = caja.buscarEnserPorNombre('Electrodoméstico');

    expect(enserBuscado).to.not.exist;
  });

  it('debería manejar adecuadamente la eliminación de enser no existente', () => {
    const caja = new Caja<{ nombre: string }>();
    caja.agregarEnser({ nombre: 'Vajilla' });
    caja.agregarEnser({ nombre: 'Ropa' });

    // Intenta eliminar un enser que no existe
    caja.eliminarEnser({ nombre: 'Electrodoméstico' });

    const contenidoEsperado = ['Vajilla', 'Ropa'];
    const contenidoReal = caja.listarContenido().map(enser => enser);

    expect(contenidoReal).to.deep.equal(contenidoEsperado);
  });

  it('debería manejar adecuadamente la eliminación en caja vacía', () => {
    const caja = new Caja<{ nombre: string }>();

    // Intenta eliminar un enser en una caja vacía
    caja.eliminarEnser({ nombre: 'Ropa' });

    const contenidoEsperado: string[] = [];
    const contenidoReal = caja.listarContenido().map(enser => enser);

    expect(contenidoReal).to.deep.equal(contenidoEsperado);
  });
});