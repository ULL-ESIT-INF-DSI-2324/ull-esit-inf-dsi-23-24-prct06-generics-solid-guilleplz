import { FileWriter } from "./filewriter";
import * as fs from 'fs';

export class TextFileWriter implements FileWriter {
    constructor(private filePath: string) {}
  
    writeFile(data: string): void {
      try {
            fs.writeFileSync(this.filePath, data, 'utf-8');
            console.log('Archivo escrito exitosamente.');
        } catch (error) {
            console.error('Error al escribir en el archivo:', error);
        }
    }
}