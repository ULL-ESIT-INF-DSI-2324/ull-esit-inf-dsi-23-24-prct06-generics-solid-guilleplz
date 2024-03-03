import 'mocha'
import { expect } from 'chai';
import { Printer } from '../../src/ejercicio4/printer';
import { Scanner } from '../../src/ejercicio4/scanner';
import { PrinterScanner } from '../../src/ejercicio4/printerscanner';

describe('Ejercicio 4 - PrinterScanner', () => {
  it('debería imprimir y escanear', () => {
    const printer = new Printer();
    const scanner = new Scanner();
    const printerScanner = new PrinterScanner(printer, scanner);
    expect(printerScanner).to.be.instanceOf(PrinterScanner);
    expect(printerScanner).to.have.property('print');
    expect(printerScanner).to.have.property('scan');
    expect(printerScanner.print).to.be.a('function');
    expect(printerScanner.scan).to.be.a('function');
  });
  it('debería imprimir', () => {
    const printer = new Printer();
    const printerScanner = new PrinterScanner(printer, new Scanner());
    expect(printerScanner.print()).to.eq(undefined);
  });
  it('debería escanear', () => {
    const scanner = new Scanner();
    const printerScanner = new PrinterScanner(new Printer(), scanner);
    expect(printerScanner.scan()).to.eq(undefined);
  });
});