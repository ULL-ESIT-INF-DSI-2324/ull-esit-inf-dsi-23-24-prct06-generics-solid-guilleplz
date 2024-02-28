import { Arithmeticable } from './arithmeticable';

/**
 * Clase que representa una colección de números aritméticos.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    /**
     * Elementos de la colección
     */
    private elements: T[] = [];
  
    /**
     * Método que añade un elemento a la colección
     * @param element elemento a añadir
     */
    addArithmeticable(element: T): void {
      this.elements.push(element);
    }
  
    /**
     * Método que obtiene un elemento de la colección
     * @param index índice del elemento a obtener
     * @returns elemento de la colección
     */
    getArithmeticable(index: number): T {
      if (index < 0 || index >= this.elements.length) {
        throw new Error('Índice introducido fuera de rango');
      }
      return this.elements[index];
    }
  
    /**
     * Método que devuelve el número de elementos de la colección
     * @returns número de elementos de la colección
     */
    getNumberOfArithmeticables(): number {
      return this.elements.length;
    }
}