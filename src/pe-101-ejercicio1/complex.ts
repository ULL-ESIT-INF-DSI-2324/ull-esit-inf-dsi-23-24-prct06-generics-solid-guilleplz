import { Arithmeticable } from './arithmeticable';
import { Rational } from '../../src/pe-101-ejercicio1/rational';
  

/**
 * Clase que representa un número complejo.
 */
export class Complex implements Arithmeticable<Complex> {
    // Parte real del número complejo.
    private real: Rational;
    // Parte imaginaria del número complejo.
    private imaginary: Rational;
  
    /**
     * Constructor de la clase.
     * @param real Parte real del número complejo.
     * @param imaginary Parte imaginaria del número complejo.
     */
    constructor(real: Rational, imaginary: Rational) {
      this.real = real;
      this.imaginary = imaginary;
    }
    
    /**
     * Método que suma dos números complejos.
     * @param other Número complejo a sumar.
     * @returns Número complejo resultado de la suma.
     */
    add(other: Complex): Complex {
      const newReal = this.real.add(other.real);
      const newImaginary = this.imaginary.add(other.imaginary);
      return new Complex(newReal, newImaginary);
    }
  
    /**
     * Método que resta dos números complejos.
     * @param other Número complejo a restar.
     * @returns Número complejo resultado de la resta.
     */
    subtract(other: Complex): Complex {
      const newReal = this.real.subtract(other.real);
      const newImaginary = this.imaginary.subtract(other.imaginary);
      return new Complex(newReal, newImaginary);
    }
  
    /**
     * Método que multiplica dos números complejos.
     * @param other Número complejo a multiplicar.
     * @returns Número complejo resultado de la multiplicación.
     */
    multiply(other: Complex): Complex {
        const newReal = this.real.multiply(other.real).subtract(this.imaginary.multiply(other.imaginary));
        const newImaginary = this.real.multiply(other.imaginary).add(this.imaginary.multiply(other.real));
        return new Complex(newReal, newImaginary);
    }
  
    /**
     * Método que divide dos números complejos.
     * @param other Número complejo a dividir.
     * @returns Número complejo resultado de la división.
     */
    divide(other: Complex): Complex {
        return other;
    }
  
    /**
     * Método que retorna la representación en texto del número complejo.
     * @returns Representación en texto del número complejo.
     */
    toString(): string {
      return `${this.real} + ${this.imaginary}i`;
    }
}
