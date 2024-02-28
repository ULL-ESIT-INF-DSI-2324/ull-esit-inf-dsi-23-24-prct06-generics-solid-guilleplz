import { Enser } from './enser';

export class Caja<T extends Enser> {
    private enseres: T[] = [];
  
    // Método para añadir un enser a la caja
    agregarEnser(enser: T): void {
      this.enseres.push(enser);
    }
  
    // Método para eliminar un enser de la caja
    eliminarEnser(enser: T): void {
        this.enseres = this.enseres.filter(e => e.nombre !== enser.nombre);
    }
  
    // Método para listar el contenido de la caja
    listarContenido(): string[] {
        const contenido = this.enseres.map(enser => enser.nombre);
        return contenido;
    }
  
    // Método para buscar un enser en la caja por nombre
    buscarEnserPorNombre(nombre: string): T | undefined {
      return this.enseres.find(enser => enser.nombre === nombre);
    }
}
  