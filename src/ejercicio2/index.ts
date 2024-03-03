import { Factura } from './factura';
import { GeneradorHTML } from './htmlgen';
import { GeneradorPDF } from './pdfgen';

// creo una factura
const factura = new Factura([
  { descripcion: 'Producto 1', cantidad: 2, precioUnitario: 20 },
  { descripcion: 'Producto 2', cantidad: 1, precioUnitario: 30 },
]);
  
// creo un generador de PDF y otro de HTML y los muestro
const generadorPDF = new GeneradorPDF();
console.log(generadorPDF.generarFactura(factura));
  
const generadorHTML = new GeneradorHTML();
console.log(generadorHTML.generarFactura(factura));
  