/*Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N,
com a notação N!, é o produto de todos os inteiros menores ou iguais a N.
 Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . 
Spoiler: É possível resolver com uma linha.
*/

var assert = require('assert');

function fatorial(num) {
    if (num === 0){
        return 0;
    } else if (num < 0) {
        console.log("nao escreva um numero negativo");
    } else if (num === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 1; i <= num; i++) {
        resultado = resultado * i;
        }
    return resultado;
    }
}

console.log(fatorial(1));

assert.strictEqual(1, fatorial(0));
assert.strictEqual(1, fatorial(1));
assert.strictEqual(2, fatorial(2));
assert.strictEqual(6, fatorial(3));
assert.strictEqual(24, fatorial(4));
assert.strictEqual(120, fatorial(5));
assert.strictEqual(720, fatorial(6));
