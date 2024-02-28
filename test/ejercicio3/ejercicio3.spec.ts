import 'mocha'
import { expect } from 'chai'
import { TextFileReader } from '../../src/ejercicio3/textfilereader'
import { TextFileWriter } from '../../src/ejercicio3/textfilewriter'
import { FileReader } from '../../src/ejercicio3/filereader'
import { FileWriter } from '../../src/ejercicio3/filewriter'

describe('TextFileReader', () => {
    const filePath = 'testfile.txt';
    const content = 'Hello, this is a test file.';
  
    before(() => {
      const writer = new TextFileWriter(filePath);
      writer.writeFile(content);
    });
  
    after(() => {
      // Limpiar el archivo después de las pruebas
      const writer = new TextFileWriter(filePath);
      writer.writeFile('');
    });
  
    it('debería leer el contenido del archivo correctamente', () => {
      const reader: FileReader = new TextFileReader(filePath);
      const result = reader.readFile();
      expect(result).to.equal(content);
    });
  
    it('debería manejar la lectura de un archivo inexistente', () => {
      const nonexistentFilePath = 'nonexistentfile.txt';
      const reader: FileReader = new TextFileReader(nonexistentFilePath);
      const result = reader.readFile();
      expect(result).to.equal('');
    });
  
    it('debería manejar correctamente la lectura de un archivo vacío', () => {
      const emptyFilePath = 'emptyfile.txt';
      const writer = new TextFileWriter(emptyFilePath);
      writer.writeFile('');
      
      const reader: FileReader = new TextFileReader(emptyFilePath);
      const result = reader.readFile();
      expect(result).to.equal('');
    });
  });
  
  describe('TextFileWriter', () => {
    const filePath = 'testfile.txt';
  
    afterEach(() => {
      // Limpiar el archivo después de las pruebas
      const writer = new TextFileWriter(filePath);
      writer.writeFile('');
    });
  
    it('debería escribir en el archivo correctamente', () => {
      const writer: FileWriter = new TextFileWriter(filePath);
      const data = 'This is new content.';
      writer.writeFile(data);
  
      const reader: FileReader = new TextFileReader(filePath);
      const result = reader.readFile();
      expect(result).to.equal(data);
    });
  
    it('debería manejar correctamente la escritura de un archivo vacío', () => {
      const emptyFilePath = 'emptyfile.txt';
      const writer: FileWriter = new TextFileWriter(emptyFilePath);
      const data = '';
      writer.writeFile(data);
  
      const reader: FileReader = new TextFileReader(emptyFilePath);
      const result = reader.readFile();
      expect(result).to.equal(data);
    });
  
    it('debería manejar la escritura en un directorio inexistente', () => {
      const nonexistentDirPath = 'nonexistentdir/testfile.txt';
      const writer: FileWriter = new TextFileWriter(nonexistentDirPath);
      const data = 'This is new content.';
      writer.writeFile(data);
  
      const reader: FileReader = new TextFileReader(nonexistentDirPath);
      const result = reader.readFile();
      expect(result).to.not.equal(data);
    });
  });