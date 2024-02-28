import { Factura } from './factura';

export interface GeneradorFactura {
    generarFactura(factura: Factura): string;
}