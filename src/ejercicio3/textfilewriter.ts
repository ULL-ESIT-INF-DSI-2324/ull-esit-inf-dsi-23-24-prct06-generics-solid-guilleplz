import { FileWriter } from "./filewriter";
import * as fs from 'fs';

/**
 * Clase que implementa la interfaz FileWriter para escribir archivos de texto.
 */
export class TextFileWriter implements FileWriter {
    /**
     * Constructor de la clase
     * @param filePath Ruta del archivo a escribir.
     */
    constructor(private filePath: string) {}
  
    /**
     * Escribe el contenido en el archivo de texto.
     * @param data Contenido a escribir en el archivo.
     * @example
     * ```ts
     * const writer = new TextFileWriter('ruta/del/archivo.txt');
     * writer.writeFile('Este es el contenido a escribir en el archivo.');
     * ```
     */
    writeFile(data: string): void {
      try {
            fs.writeFileSync(this.filePath, data, 'utf-8');
            console.log('Archivo escrito exitosamente.');
        } catch (error) {
            console.error('Error al escribir en el archivo:', error);
        }
    }
}