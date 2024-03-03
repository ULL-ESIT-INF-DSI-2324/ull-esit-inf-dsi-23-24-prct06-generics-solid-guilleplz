import { Factura } from './factura';

/**
 * Interfaz GeneradorFactura
 */
export interface GeneradorFactura {
  generarFactura(factura: Factura): string;
}