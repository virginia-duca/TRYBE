
//Crie uma função sum que dado um número variável de elementos retorna a soma 
//desses elementos. Ou seja:

//Dica: use parâmetro rest.

const assert = require('assert')

const sum = (...parameter) => {
    let soma = 0
    for (let i of parameter) {
        soma += i;
    }
    return soma
}

// escreva sum abaixo

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
