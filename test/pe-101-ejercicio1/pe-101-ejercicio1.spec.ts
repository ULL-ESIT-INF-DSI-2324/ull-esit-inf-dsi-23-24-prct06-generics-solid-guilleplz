import 'mocha'
import { expect } from 'chai'
import { ArithmeticNumber } from '../../src/pe-101-ejercicio1/arithmeticnumber'
import { ArithmeticableCollection } from '../../src/pe-101-ejercicio1/arithmeticablecolection'
import { Rational } from '../../src/pe-101-ejercicio1/rational'

describe('ArithmeticNumber', () => {
    it('debería sumar dos números correctamente', () => {
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(3);
        const sum = num1.add(num2);
        expect(sum.GetValue()).to.equal(8);
    });

    it('debería restar dos números correctamente', () => {
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(3);
        const difference = num1.subtract(num2);
        expect(difference.GetValue()).to.equal(2);
    });

    it('debería multiplicar dos números correctamente', () => {
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(3);
        const product = num1.multiply(num2);
        expect(product.GetValue()).to.equal(15);
    });

    it('debería dividir dos números correctamente', () => {
        const num1 = new ArithmeticNumber(6);
        const num2 = new ArithmeticNumber(2);
        const quotient = num1.divide(num2);
        expect(quotient.GetValue()).to.equal(3);
    });

    it('debería lanzar una excepción al dividir por cero', () => {
        const num1 = new ArithmeticNumber(6);
        const num2 = new ArithmeticNumber(0);
        expect(() => num1.divide(num2)).to.throw('Cannot divide by zero');
    });

    it('debería manejar números negativos en la resta', () => {
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(8);
        const difference = num1.subtract(num2);
        expect(difference.GetValue()).to.equal(-3);
    });

    it('debería manejar números decimales en la multiplicación', () => {
        const num1 = new ArithmeticNumber(2.5);
        const num2 = new ArithmeticNumber(4);
        const product = num1.multiply(num2);
        expect(product.GetValue()).to.equal(10);
    });

    it('debería manejar números decimales en la división', () => {
        const num1 = new ArithmeticNumber(10);
        const num2 = new ArithmeticNumber(3);
        const quotient = num1.divide(num2);
        expect(quotient.GetValue()).to.be.closeTo(3.333, 0.001);
    });
});

describe('ArithmeticableCollection', () => {
    it('debería añadir y obtener elementos correctamente', () => {
        const collection = new ArithmeticableCollection<ArithmeticNumber>();
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(3);
        collection.addArithmeticable(num1);
        collection.addArithmeticable(num2);
        expect(collection.getNumberOfArithmeticables()).to.equal(2);
        expect(collection.getArithmeticable(0)).to.equal(num1);
        expect(collection.getArithmeticable(1)).to.equal(num2);
    });

    it('debería lanzar una excepción al intentar obtener un elemento fuera de rango', () => {
        const collection = new ArithmeticableCollection<ArithmeticNumber>();
        expect(() => collection.getArithmeticable(0)).to.throw('Índice introducido fuera de rango');
    });
    it('debería añadir y obtener elementos correctamente', () => {
        const collection = new ArithmeticableCollection<ArithmeticNumber>();
        const num1 = new ArithmeticNumber(5);
        const num2 = new ArithmeticNumber(3);
        const num3 = new ArithmeticNumber(7);
        collection.addArithmeticable(num1);
        collection.addArithmeticable(num2);
        collection.addArithmeticable(num3);
        expect(collection.getNumberOfArithmeticables()).to.equal(3);
        expect(collection.getArithmeticable(0)).to.equal(num1);
        expect(collection.getArithmeticable(1)).to.equal(num2);
        expect(collection.getArithmeticable(2)).to.equal(num3);
    });
});

describe('Rational', () => {
  it('debería sumar dos números racionales correctamente', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const sum = rational1.add(rational2);
    expect(sum.toString()).to.equal('5/4');
  });

  it('debería restar dos números racionales correctamente', () => {
    const rational1 = new Rational(3, 4);
    const rational2 = new Rational(1, 2);
    const difference = rational1.subtract(rational2);
    expect(difference.toString()).to.equal('1/4');
  });

  it('debería multiplicar dos números racionales correctamente', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const product = rational1.multiply(rational2);
    expect(product.toString()).to.equal('3/8');
  });

  it('debería dividir dos números racionales correctamente', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const quotient = rational1.divide(rational2);
    expect(quotient.toString()).to.equal('4/6');
  });

  it('debería lanzar una excepción al dividir por cero', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(0, 1);
    expect(() => rational1.divide(rational2)).to.throw('Cannot divide by zero');
  });
});



