import { Scannable } from './scannable';

/**
 * Class Scanner
 */
export class Scanner implements Scannable {
  /**
   * Method scan
   * @example
   * '''ts
   * const scanner = new Scanner();
   * scanner.scan();
   * '''
   */
  scan(): void {
    console.log('Scanning...');
  }
}
