import { Printable } from './printable';
import { Scannable } from './scannable';

/**
 * Class PrinterScanner
 */
export class PrinterScanner implements Printable, Scannable {
  // atributos
  private printer: Printable;
  private scanner: Scannable;

  /**
   * Constructor PrinterScanner
   * @param printer
   * @param scanner
   */
  constructor(printer: Printable, scanner: Scannable) {
    this.printer = printer;
    this.scanner = scanner;
  }

  /**
   * Method print
   * @example
   * '''ts
   * const printerScanner = new PrinterScanner(new Printer(), new Scanner());
   * printerScanner.print();
   * '''
   */
  print(): void {
    this.printer.print();
  }

  /**
   * Method scan
   * @example
   * '''ts
   * const printerScanner = new PrinterScanner(new Printer(), new Scanner());
   * printerScanner.scan();
   * '''
   */
  scan(): void {
    this.scanner.scan();
  }
}