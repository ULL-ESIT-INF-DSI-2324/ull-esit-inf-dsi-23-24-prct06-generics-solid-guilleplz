import { Rational } from './rational';
import { Complex } from './complex';

const rational1 = new Rational(1, 2);
const rational2 = new Rational(3, 4);
const complex1 = new Complex(rational1, rational2);

const rational3 = new Rational(2, 3);
const rational4 = new Rational(5, 6);
const complex2 = new Complex(rational3, rational4);

const sum = complex1.add(complex2);
console.log(sum.toString()); // Output: 5/6 + 11/12i
