import { Factura } from './factura';
import { GeneradorFactura } from './facturagen';

/**
 * Clase GeneradorPDF
 */
export class GeneradorPDF implements GeneradorFactura {
  /**
   * Genera una factura en formato PDF
   * @param factura Factura
   * @returns string con la factura en formato PDF
   * @example 
   * ```ts
   * const generadorPDF = new GeneradorPDF();
   * console.log(generadorPDF.generarFactura(factura)); // Factura en formato PDF - Total: 70
   * ```
   */
  generarFactura(factura: Factura): string {
    return `Factura en formato PDF - Total: ${factura.calcularTotal()}`;
  }
}