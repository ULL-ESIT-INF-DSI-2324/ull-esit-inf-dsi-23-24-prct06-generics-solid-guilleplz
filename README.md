
# Practica 6: Clases e interfaces genéricas. Principios SOLID

***Guillermo Plaza Gayan - alu0101495354@ull.edu.es***

## Objetivo de la practica

En esta práctica aprenderé a aplicar los principios ***SOLID*** que hemos aprendido en clase a mis ***interfaces y clases genéricas***, así como a familiarizarme más con estas dos últimas

## Trabajo previo

Antes de empezar con los ejecicios propuestos debo crear el proyecto dentro del repositorio de Github asignado. En esta práctica, además de usar las dependencias usadas en proyectos anteriores, usaremos las dependencias ***Instanbul y Coveralls***.

### Instanbul

Istanbul es una biblioteca que se utiliza para la cobertura de código. En el contexto de las pruebas de software. Istanbul acompaña el código con seguimiento de **cobertura** cuando se ejecuta, y genera un **informe de cobertura**.

### Coveralls

Coveralls es un servicio web que ayuda a rastrear la cobertura de código a lo largo del tiempo para optimizar la efectividad de las pruebas. Es especialmente útil cuando se utiliza con **integración continua** y **sistemas de control de versiones** como GitHub.

Cuando ejecutas tus pruebas con una herramienta de cobertura de código como Istanbul, puedes enviar los resultados a Coveralls. Coveralls luego proporciona una visualización detallada de qué partes de tu código base no están cubiertas por las pruebas.

## Ejercicios

### Ejercicio 1 - La mudanza

En este ejercicio he diseñado un sistema que permite gestionar enseres con distintos nombres ( se le pueden añadir más atributos a los enseres como tamaño, color, ... ) en cajas. Estas últimas permiten añadir, eliminar y buscar enseres así como listar su contenido.

En primer lugar, creo la interfaz **Enser**. En ella defino el nombre del enser.

``` ts
export interface Enser {  
  nombre: string;
}
```

En esta interfaz se pueden añadir más atributos a los enseres

Luego, Creo la clase **Caja**, la cual contiene una lista de enseres

``` ts
export class Caja<T extends Enser> {
  private enseres: T[] = [];
  //...
```

Esta clase tiene los métodos necesarios para añadir, eliminar, buscar y listar los enseres que contiene la caja

``` ts
agregarEnser(enser: T): void {
  this.enseres.push(enser);
}

eliminarEnser(enser: T): void {
  this.enseres = this.enseres.filter(e => e.nombre !== enser.nombre);
}

listarContenido(): string[] {
  const contenido = this.enseres.map(enser => enser.nombre);
  return contenido;
}

buscarEnserPorNombre(nombre: string): T | undefined {
  return this.enseres.find(enser => enser.nombre === nombre);
}
```

En este ejercicio se ha implementado el sistema de mudanzas y además he seguido los principios SOLID:

- **Principio de responsabilidad única**: al tener métodos específicos para cada tarea
- **principio de sustitución de Liskov**: al utilizar generics para asegurar que solo se almacenen objetos del tipo esperado en la caja.

### Ejercicio 2 - Facturas en diferentes formatos

En este ejercicio debo diseñar un sistema de facturación que genere facturas tanto en HTML como en PDF.

Para llevar a cabo el objetivo del ejercicio debo crear una clase Factura que contendrá una lista de items que irán dentro de la factura. Estos items tienen una descripción, la cantidad que se han comprado y el precio por unidad.
La clase Factura tiene un método para devolver el precio total de la factura

``` ts
export class Factura {
  private items: { descripcion: string; cantidad: number; precioUnitario: number }[];
  
  constructor(items: { descripcion: string; cantidad: number; precioUnitario: number }[]) {
    this.items = items;
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
  }
}
```

Ahora creo una interfaz GeneradorFactura, que servirá de plantilla para las dos clases siguientes. Esto se hace ya que las dos clases deben tener el método generarFactura(factura)

``` ts
export interface GeneradorFactura {
  generarFactura(factura: Factura): string;
}
```

Creo la clase GeneradorHTML siguiendo la plantilla GeneradorFactura. Por lo tanto, debe contar con el método generarFactura(factura) que en este caso, retorna una string en formato HTML con las etiquetas html y body

``` ts
export class GeneradorHTML implements GeneradorFactura {
  generarFactura(factura: Factura): string {
    return `<html><body>Factura en formato HTML - Total: ${factura.calcularTotal()}</body></html>`;
  }
}
```

Instancio la clase GeneradorPDF que también implementa la interfaz GeneradorFactura, por lo que su método generarFactura(factura) devuelve una string con el precio de la factura pero esta vez en un formato normal

``` ts
export class GeneradorPDF implements GeneradorFactura {
  generarFactura(factura: Factura): string {
    return `Factura en formato PDF - Total: ${factura.calcularTotal()}`;
  }
}
```

**En este ejercicio se nos hace la siguiente pregunta:** *Además, su diseño deberá permitir añadir nuevos formatos de generación de facturas sin necesidad de modificar el resto del código que haya implementado. Teniendo en cuenta esto último en concreto, ¿de qué principio SOLID se trataría?*

**La respuesta es la siguiente:** El principio es el de Open/Closed. Este principio establece que las clases deben estar abiertas para la extensión pero cerradas para la modificación. En el contexto del sistema de facturación, esto significa que se debe poder añadir nuevos formatos de generación de facturas sin tener que modificar el código existente.

### Ejercicio 3 - Gestor de ficheros

El código proporcionado en el enunciado no se cumple completamente con el principio de Responsabilidad Única. La clase FileManager tiene dos responsabilidades principales: leer y escribir archivos. Esta combinación de responsabilidades puede hacer que la clase sea más difícil de entender, mantener y extender en el futuro.

Para arreglar este problema, debería separar las responsabilidades de lectura y escritura en clases distintas, cumpliendo así con el principio de SRP

implemento las dos interfaces que se usarán para implementar las clases:

``` ts
export interface FileReader {
    readFile(): string;
}

export interface FileWriter {
    writeFile(data: string): void;
}
```

Ahora implemento las dos clases. Cada una de ellas seguirá un único fin respetando el principio SOLID de SRP

la clase TextFileReader se encarga de la lectura

``` ts
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
```

Mientras que la clase TextFileWriter se encarga de la escritura

``` ts
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
```

De esta manera nuestro programa seguirá a la perfección los principios SOLID.

### Ejercicio 4 - Impresoras y escáneres

En este ejercicio, el código del enunciado no cumple con el principio de responsabilidad única de los principios SOLID ya que cuenta con una clase PrinterScanner que se encarga de imprimir y escanear.

Para hacer que el código cumpla con el principio de responsabilidad única, podemos separar la clase en dos distintas que tengan fines únicos. Una clase printer que se encargue de imprimir y una clase scanner que se encargue de escanear.

Primero creo la interfaz Printable que cuenta con un método print y la interfaz Scannable que cuenta con un método Scan

``` ts
export interface Printable {
  print(): void;
}

export interface Scannable {
  scan(): void;
}
```

Estas interfaces implementan las clases Printer y Scanner mostradas a continuación

``` ts
export class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

export class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}
```

De esta forma tenemos las funcionalidades repartidas en dos clases. Una clase se encarga de imprimir y la otra de escanear, cumpliendo así con el principio de resposabilidad unica de SOLID

### Ejercicio 5 - Servicio de mensajería

En este ejercicio, el código no cumple con el principio de inversión de dependencia. Este establece que las clases de alto nivel no deben depender de las clases de bajo nivel, sino de abstracciones.

En este caso, la clase Notifier depende directamente de las clases concretas EmailService y ShortMessageService, lo que hace que sea rígida y difícil de extender o modificar sin cambiar la implementación de Notifier

Para arreglar esto, debo de crear una interfaz para abstraer esa información y hacer que las clases implementen esa interfaz.

Dicha interfaz sería la siguiente:

``` ts
interface NotificationService {
  notify(message: string): void;
}
```

Ahora hago que las clases implementen esa interfaz abstrayendo la información:

``` ts
class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Enviando notificación por Email: ${message}`);
  }
}

class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}

class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```

De esta manera, el programa cumplirá a la perfección con los principios SOLID

### Ejercicio en clase - PE 101

En este ejercicio se pide diseñar un interfaz arithmeticable que cuente con distintos métodos, una clase ArithmeticableCollection que sea un conjunto de Arithmeticable y una clase Complex que implemente la interfaz Arithmeticable aprovechando la clase Rational de las prácticas anteriores.

Primero, defino la interfaz Arithmeticable que debe contener los siguientes métodos: add(), substract(), multiply(), divide():

``` ts
interface Arithmeticable<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}
```

Ahora creo la clase ArithmeticCollection que extiende la anterior interfaz y se trata de un conjunto de Arithmeticable:

``` ts
class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[] = [];

  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  getArithmeticable(index: number): T {
    if (index < 0 || index >= this.elements.length) {
      throw new Error('Index out of bounds');
    }
    return this.elements[index];
  }

  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
```

Ahora aprovecho la clase Rational de practicas anteriores e implemento una nueva clase Rational que implemente la interfaz Arithmeticable

``` ts
class Rational implements Arithmeticable<Rational> {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error('Denominator cannot be zero');
    }
    const gcd = this.greatestCommonDivisor(Math.abs(numerator), Math.abs(denominator));
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;

    if (denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  private greatestCommonDivisor(a: number, b: number): number {
    return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
  }

  add(other: Rational): Rational {
    const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  subtract(other: Rational): Rational {
    const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  multiply(other: Rational): Rational {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  divide(other: Rational): Rational {
    if (other.numerator === 0) {
      throw new Error('Cannot divide by zero');
    }
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return new Rational(newNumerator, newDenominator);
  }

  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
}
```

Por último a partir de esta clase diseño la clase Complex que también implementa Arithmeticable

``` ts
class Complex implements Arithmeticable<Complex> {
  private real: Rational;
  private imaginary: Rational;

  constructor(real: Rational, imaginary: Rational) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other: Complex): Complex {
    const newReal = this.real.add(other.real);
    const newImaginary = this.imaginary.add(other.imaginary);
    return new Complex(newReal, newImaginary);
  }

  subtract(other: Complex): Complex {
    const newReal = this.real.subtract(other.real);
    const newImaginary = this.imaginary.subtract(other.imaginary);
    return new Complex(newReal, newImaginary);
  }

  multiply(other: Complex): Complex {
    const term1 = this.real.multiply(other.real);
    const term2 = this.real.multiply(other.imaginary);
    const term3 = this.imaginary.multiply(other.real);
    const term4 = this.imaginary.multiply(other.imaginary).multiply(new Rational(-1, 1));

    const newReal = term1.subtract(term4);
    const newImaginary = term2.add(term3);

    return new Complex(newReal, newImaginary);
  }

  divide(other: Complex): Complex {
    return other;
  }

  toString(): string {
    return `${this.real} + ${this.imaginary}i`;
  }
}
```

En este ejercicio se han respetado los principios SOLID:

- Principio de resposabilidad única --> Las clases instanciadas tienen una única función: operar con aritmeticos
- Principio Open-Close --> Las clases están abiertas a extensión y cerradas a modificación
- Principio de Inversión de Dependencia --> Las clases se basan en la abstracción de la información gracias al uso de la interfaz principal
- Principio de Sustitución de Liskov --> Las clases cumplen con este principio ya que pueden ser usadas en lugar de la interfaz Arithmeticable sin modificar el funcionamiento del programa

## Conclusión

En esta practica he aprendido a como aplicar los principios SOLID de programación a mi código de manera que lo simplifica y lo hace escalable. Además, he ido mejorando en la implementación de clases e interfaces genéricas en mis programas
