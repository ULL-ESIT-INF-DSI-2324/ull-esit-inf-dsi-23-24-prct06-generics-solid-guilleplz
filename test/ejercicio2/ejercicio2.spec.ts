import 'mocha'
import { expect } from 'chai'
import { Factura } from '../../src/ejercicio2/factura'
import { GeneradorHTML } from '../../src/ejercicio2/htmlgen'
import { GeneradorPDF } from '../../src/ejercicio2/pdfgen'
import { GeneradorFactura } from '../../src/ejercicio2/facturagen'

describe('Factura', () => {
    it('debería calcular el total correctamente con cero productos', () => {
      const factura = new Factura([]);
      const totalEsperado = 0;
      const totalReal = factura.calcularTotal();
      expect(totalReal).to.equal(totalEsperado);
    });
  });
  
  describe('GeneradorPDF', () => {
    it('debería generar factura en formato PDF correctamente con cero productos', () => {
      const factura = new Factura([]);
      const generadorPDF = new GeneradorPDF();
      const facturaPDF = generadorPDF.generarFactura(factura);
      expect(facturaPDF).to.include('Factura en formato PDF - Total: 0');
    });
  });
  
  describe('GeneradorHTML', () => {
    it('debería generar factura en formato HTML correctamente con cero productos', () => {
      const factura = new Factura([]);
      const generadorHTML = new GeneradorHTML();
      const facturaHTML = generadorHTML.generarFactura(factura);
      expect(facturaHTML).to.include('<html><body>Factura en formato HTML - Total: 0</body></html>');
    });
  });
  
  describe('GeneradorFactura', () => {
    it('debería permitir añadir nuevos generadores sin modificar código existente', () => {
      class NuevoGenerador implements GeneradorFactura {
        generarFactura(factura: Factura): string {
          // Lógica para generar factura con nuevo formato
          return `Nueva factura - Total: ${factura.calcularTotal()}`;
        }
      }
  
      const factura = new Factura([
        { descripcion: 'Producto 1', cantidad: 2, precioUnitario: 20 },
        { descripcion: 'Producto 2', cantidad: 1, precioUnitario: 30 },
      ]);
  
      const nuevoGenerador = new NuevoGenerador();
      const nuevaFactura = nuevoGenerador.generarFactura(factura);
  
      expect(nuevaFactura).to.include('Nueva factura - Total: 70');
    });
  });