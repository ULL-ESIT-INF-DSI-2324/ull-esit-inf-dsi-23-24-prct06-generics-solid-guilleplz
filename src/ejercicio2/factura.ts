
/**
 * Clase Factura
 */
export class Factura {
  private items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  
  /**
   * Constructor de la clase
   * @param items Array de objetos con la descripción, cantidad y precio unitario de los productos
   */
  constructor(items: { descripcion: string; cantidad: number; precioUnitario: number }[]) {
    this.items = items;
  }
  
  /**
   * Método para calcular el total de la factura
   * @returns Total de la factura
   * @example
   * ```ts
   * const factura = new Factura([
   *  { descripcion: 'Producto 1', cantidad: 2, precioUnitario: 20 },
   *  { descripcion: 'Producto 2', cantidad: 1, precioUnitario: 30 },
   * ]);
   * console.log(factura.calcularTotal()); // 70
   * ```
   */
  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
  }
}