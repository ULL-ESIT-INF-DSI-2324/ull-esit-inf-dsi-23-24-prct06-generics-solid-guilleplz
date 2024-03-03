import { Enser } from './enser';

/**
 * Clase Caja
 */
export class Caja<T extends Enser> {
    
  // Atributo enseres --> Array de enseres
  private enseres: T[] = [];
  
  /**
   * Método para agregar un enser a la caja
   * @param enser Enser a agregar
   * @example
   * ```ts
   * const caja = new Caja();
   * caja.agregarEnser({ nombre: 'Vajilla' });
   * caja.agregarEnser({ nombre: 'Ropa' });
   * ```
   */
  agregarEnser(enser: T): void {
    this.enseres.push(enser);
  }
  
  /**
   * Método para eliminar un enser de la caja
   * @param enser Enser a eliminar
   * @example
   * ```ts
   * const caja = new Caja();
   * caja.agregarEnser({ nombre: 'Vajilla' });
   * caja.agregarEnser({ nombre: 'Ropa' });
   * caja.eliminarEnser({ nombre: 'Vajilla' });
   * ```
   */
  eliminarEnser(enser: T): void {
    this.enseres = this.enseres.filter(e => e.nombre !== enser.nombre);
  }
  
  /**
   * Método para listar el contenido de la caja
   * @returns Array con el contenido de la caja
   * @example
   * ```ts
   * const caja = new Caja();
   * caja.agregarEnser({ nombre: 'Vajilla' });
   * caja.agregarEnser({ nombre: 'Ropa' });
   * console.log(caja.listarContenido()); // ['Vajilla', 'Ropa']
   * ```
   */
  listarContenido(): string[] {
    const contenido = this.enseres.map(enser => enser.nombre);
    return contenido;
  }
  
  /**
   * Método para buscar un enser en la caja por nombre
   * @param nombre Nombre del enser a buscar
   * @returns Enser encontrado
   * @example
   * ```ts
   * const caja = new Caja();
   * caja.agregarEnser({ nombre: 'Vajilla' });
   * caja.agregarEnser({ nombre: 'Ropa' });
   * const enserBuscado = caja.buscarEnserPorNombre('Ropa');
   * if (enserBuscado) {
   *   console.log(`Enser encontrado: ${enserBuscado.nombre}`); // Enser encontrado: Ropa
   * }
   * ```
   */
  buscarEnserPorNombre(nombre: string): T | undefined {
    return this.enseres.find(enser => enser.nombre === nombre);
  }
}
  