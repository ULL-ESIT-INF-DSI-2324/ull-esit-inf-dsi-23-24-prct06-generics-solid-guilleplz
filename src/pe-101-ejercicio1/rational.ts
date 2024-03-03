import { Arithmeticable } from './arithmeticable';

export class Rational implements Arithmeticable<Rational> {
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