import { TextFileReader } from './textfilereader';
import { TextFileWriter } from './textfilewriter';

// Cliente
const filePath = 'example.txt';

// Uso del lector
const fileReader = new TextFileReader(filePath);
const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

// Uso del escritor
const fileWriter = new TextFileWriter(filePath);
const newData = 'This is new content to be written into the file.';
fileWriter.writeFile(newData);

// Lectura del contenido actualizado
const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);