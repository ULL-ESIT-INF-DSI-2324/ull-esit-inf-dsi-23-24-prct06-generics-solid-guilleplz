import { GeneradorFactura } from "./facturagen";
import { Factura } from "./factura";

export class GeneradorHTML implements GeneradorFactura {
    generarFactura(factura: Factura): string {
      // Lógica para generar factura en formato HTML
      return `<html><body>Factura en formato HTML - Total: ${factura.calcularTotal()}</body></html>`;
    }
}