import { formalCurrency } from '../scripts/utils/money.js';

console.log('test suite: formalCurrency')

console.log('convert cents into dollars');

if(formalCurrency(2095) === '20.95') {
    console.log('passed');
}
else {
    console.log('fail');
}

console.log('works with 0');


if(formalCurrency(0) === '0.00') {
    console.log('passed');
}
else {
    console.log('fail');
}

console.log('rounds up to the nearest cent');


if(formalCurrency(2000.5) === '20.01') {
    console.log('passed');
}
else {
    console.log('fail');
}