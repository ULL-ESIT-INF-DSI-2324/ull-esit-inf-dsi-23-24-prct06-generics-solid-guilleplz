import { Printable } from './printable';

/**
 * Class Printer
 */
export class Printer implements Printable {
  /**
   * Method print
   * @example
   * '''ts
   * const printer = new Printer();
   * printer.print();
   * '''
   */
  print(): void {
    console.log('Printing...');
  }
}
