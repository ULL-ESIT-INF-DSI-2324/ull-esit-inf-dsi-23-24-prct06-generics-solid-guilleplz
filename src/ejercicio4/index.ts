import { Printer } from './printer';
import { Scanner } from './scanner';
import { PrinterScanner } from './printerscanner';

const printer = new Printer();
// imprimir
printer.print();

const scanner = new Scanner();
// escanear
scanner.scan();

const printerScanner = new PrinterScanner(new Printer(), new Scanner());
// imprimir
printerScanner.print();
// escanear
printerScanner.scan();