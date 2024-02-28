import { Factura } from './factura';
import { GeneradorHTML } from './htmlgen';
import { GeneradorPDF } from './pdfgen';

const factura = new Factura([
    { descripcion: 'Producto 1', cantidad: 2, precioUnitario: 20 },
    { descripcion: 'Producto 2', cantidad: 1, precioUnitario: 30 },
  ]);
  
  const generadorPDF = new GeneradorPDF();
  console.log(generadorPDF.generarFactura(factura));
  
  const generadorHTML = new GeneradorHTML();
  console.log(generadorHTML.generarFactura(factura));
  