import { FileReader } from "./filereader";
import * as fs from 'fs';

/**
 * Clase que implementa la interfaz FileReader para leer archivos de texto.
 */
export class TextFileReader implements FileReader {
  /**
   * Constructor de la clase
   * @param filePath Ruta del archivo a leer.
   */
  constructor(private filePath: string) {}
  
  /**
   * Lee el archivo de texto y retorna su contenido.
   * @returns string con el contenido del archivo.
   * @example
   * ```ts
   * const reader = new TextFileReader('ruta/del/archivo.txt');
   * console.log(reader.readFile()); // Contenido del archivo
   * ```
   */
  readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      return '';
    }
  }
}