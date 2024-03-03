import { Arithmeticable } from './arithmeticable';
import { Rational } from './rational';

export class Complex implements Arithmeticable<Complex> {
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