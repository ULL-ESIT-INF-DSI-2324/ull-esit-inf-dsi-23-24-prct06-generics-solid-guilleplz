/**
 * Interfaz que define el comportamiento de un escritor de archivos.
 */
export interface FileWriter {
    writeFile(data: string): void;
}