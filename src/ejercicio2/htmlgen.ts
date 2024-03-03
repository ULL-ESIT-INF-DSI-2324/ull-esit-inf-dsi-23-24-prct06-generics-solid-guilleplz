import { GeneradorFactura } from "./facturagen";
import { Factura } from "./factura";

/**
 * Clase GeneradorHTML
 */
export class GeneradorHTML implements GeneradorFactura {
  /**
   * Genera una factura en formato HTML
   * @param factura Factura
   * @returns string con la factura en formato HTML
   * @example
   * ```ts
   * const generadorHTML = new GeneradorHTML();
   * console.log(generadorHTML.generarFactura(factura));
   * ```
   */
  generarFactura(factura: Factura): string {
    return `<html><body>Factura en formato HTML - Total: ${factura.calcularTotal()}</body></html>`;
  }
}