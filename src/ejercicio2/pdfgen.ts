import { Factura } from './factura';
import { GeneradorFactura } from './facturagen';

export class GeneradorPDF implements GeneradorFactura {
    generarFactura(factura: Factura): string {
      // Lógica para generar factura en formato PDF
      return `Factura en formato PDF - Total: ${factura.calcularTotal()}`;
    }
}