import { Arithmeticable } from "./arithmeticable";

export class ArithmeticNumber implements Arithmeticable<ArithmeticNumber> {
    /**
     * valor del número aritmético
     */
    private value: number;
    /**
     * constructor de la clase
     * @param value valor del número aritmético
     */
    constructor(value: number) {
      this.value = value;
    }

    /**
     * Método que devuelve el valor del número aritmético
     * @returns valor del número aritmético
     */
    GetValue(): number {
      return this.value;
    }
    
    /**
     * Método que suma dos números aritméticos
     * @param other número aritmético a sumar
     * @returns número aritmético resultado de la suma
     */
    add(other: ArithmeticNumber): ArithmeticNumber {
      return new ArithmeticNumber(this.value + other.value);
    }
  
    /**
     * Método que resta dos números aritméticos
     * @param other número aritmético a restar
     * @returns número aritmético resultado de la resta
     */
    subtract(other: ArithmeticNumber): ArithmeticNumber {
      return new ArithmeticNumber(this.value - other.value);
    }
    
    /**
     * Método que multiplica dos números aritméticos
     * @param other número aritmético a multiplicar
     * @returns número aritmético resultado de la multiplicación
     */
    multiply(other: ArithmeticNumber): ArithmeticNumber {
      return new ArithmeticNumber(this.value * other.value);
    }
    
    /**
     * Método que divide dos números aritméticos
     * @param other número aritmético a dividir
     * @returns número aritmético resultado de la división
     */
    divide(other: ArithmeticNumber): ArithmeticNumber {
      if (other.value === 0) {
        throw new Error("Cannot divide by zero");
      }
      return new ArithmeticNumber(this.value / other.value);
    }
    
    
}
  