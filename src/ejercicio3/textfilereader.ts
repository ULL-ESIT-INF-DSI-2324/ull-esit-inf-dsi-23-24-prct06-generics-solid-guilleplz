import { FileReader } from "./filereader";
import * as fs from 'fs';

export class TextFileReader implements FileReader {
    constructor(private filePath: string) {}
  
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