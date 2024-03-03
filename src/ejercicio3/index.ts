import { TextFileReader } from './textfilereader';
import { TextFileWriter } from './textfilewriter';

// creo un lector de archivos de texto y muestro el contenido del archivo
const filePath = 'example.txt';

const fileReader = new TextFileReader(filePath);
const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

// creo un escritor de archivos de texto y escribo nuevo contenido en el archivo
const fileWriter = new TextFileWriter(filePath);
const newData = 'This is new content to be written into the file.';
fileWriter.writeFile(newData);

// muestro el contenido actualizado del archivo
const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);