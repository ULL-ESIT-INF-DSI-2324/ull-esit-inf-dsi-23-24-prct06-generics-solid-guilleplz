/**
 * Clase que representa un número racional
 */
export class Rational {
    /**
     * numerador del número racional
     */
    private numerator: number;
    /**
     * denominador del número racional
     */
    private denominator: number;
    
    /**
     * Constructor de la clase
     * @param numerator numerador del número racional
     * @param denominator denominador del número racional
     */
    constructor(numerator: number, denominator:number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    /**
     * Método que calcula el máximo común divisor de dos números
     * @param a primer número
     * @param b segundo número
     * @returns máximo común divisor
     */
    mcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
          }
          return Math.abs(a);
    }

    /**
     * Método que simplifica el número racional
     * @returns número racional simplificado
     */
    simplificarRacional(): Rational {
        const comunDivisor = this.mcd(this.numerator, this.denominator);
        this.numerator /= comunDivisor;
        this.denominator /= comunDivisor;
        return new Rational(this.numerator, this.denominator);
    }

    /**
     * Método que suma dos números racionales
     * @param other número racional a sumar
     * @returns número racional resultado de la suma
     */
    add(other: Rational): Rational {
        const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator).simplificarRacional();
    }

    /**
     * Método que resta dos números racionales
     * @param other número racional a restar
     * @returns número racional resultado de la resta
     */
    subtract(other: Rational): Rational {
        const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator).simplificarRacional();
    }

    /**
     * Método que multiplica dos números racionales
     * @param other número racional a multiplicar
     * @returns número racional resultado de la multiplicación
     */
    multiply(other: Rational): Rational {
        const newNumerator = this.numerator * other.numerator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }

    /**
     * Método que divide dos números racionales
     * @param other número racional a dividir
     * @returns número racional resultado de la división
     */
    divide(other: Rational): Rational {
        if (other.numerator === 0) {
            throw new Error('Cannot divide by zero');
        }
        const newNumerator = this.numerator * other.denominator;
        const newDenominator = this.denominator * other.numerator;
        return new Rational(newNumerator, newDenominator);
    }

    /**
     * Método que devuelve el número racional como string
     * @returns número racional como string
     */
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}