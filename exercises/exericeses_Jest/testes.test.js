const exer = require('./exercicio1');

describe('suite de testes', () => {
    describe('Testes da funcao sum', () => {
        test('A soma de 4 e 5 é igual a 9', () => {
            expect(exer.sum(4, 5)).toBe(9);
        });
    
        test('A soma de 0 e 0 é igual a 0', () => {
            expect(exer.sum(0,0)).toBe(0);
        }) 
        test('se o parametro for string, retorna erro', () => {
            expect(() => {
                exer.sum('frase', 2)
            }).toThrow()
        });
        test('se o parametro for string, retorna uma mensagem de erro', () => {
            expect(() => {
                exer.sum('frase', 2)
            }).toThrow('parameters must be numbers');
        });
    });
    describe('Testes da funcao myIndexOf', () => {
        test('Verificar se dado um array e o 3 retorna 2', () => {
            expect(exer.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
        });

        test('Verificar se dado um array que nao contem 5, a funcao retorna -1', () => {
            expect(exer.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
        });
    });
    describe('Testes da funcao mySum', () => {
        test('Dado um array, a soma deve ser 10', () => {
            expect(exer.mySum([1, 2, 3, 4])).toBe(10);
        });
        test('Dado um array, a soma deve ser 0', () => {
            expect(exer.mySum([1, -2, -3, 4])).toBe(0);
        });
    });
    describe('Teste para a funcao myRemove', () =>{
        test('Dado um numero e um array que o contem, a funcao retorna um novo arrray que nao contem esse numero', () => {
            expect(exer.myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
        });
        test('Dado um numero e um array que o contem, a funcao nao retorna um novo arrray que contem esse numero', () => {
            expect(exer.myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
        });
        test('Dado um array, a funcao nao altera o array original', () => {
            expect(arr1).toStrictEqual([1, 2, 3, 4, 5, 6]);
        });
        test('Dado um numero e um array que nao o contem, a funcao retorna um novo arrray que nao contem esse numero', () => {
            expect(exer.myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
        });
    });
    describe('Teste para a funcao myRemoveWithoutCopy', () => {
        test('Dado um numero e um array que o contem, a funcao remove o numero do array', () => {
            expect(exer.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
        });
        test('Dado um numero e um array que o contem, a funcao nao remove o numero', () => {
            expect(exer.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
        });
        test('Dado um numero e um array que o contem, a funcao remove o numero do array', () => {
            expect(exer.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
        });
        test('Dado um numero e um array que o contem, a funcao remove o numero do array original', () => {
            expect(arr).toStrictEqual([1, 3, 4, 5]);
        }) ;
    });
    describe('Teste para a funcao myFizzBuzz', () => {
        test('Dado 15, a funcao retorna fizzbuzz', () => {
            expect(exer.myFizzBuzz(15)).toMatch('fizzbuzz');
        });
        test('Dado 12, a funcao retorna fizz', () => {
            expect(exer.myFizzBuzz(12)).toMatch('fizz')
        })
        test('Dado 10, a funcao retorna buzz', () => {
            expect(exer.myFizzBuzz(10)).toMatch('buzz');
        });
        test('Dado 7, a funcao retorna 7', () => {
            expect(exer.myFizzBuzz(7)).toBe(7);
        });
        test('Dado uma string, a funcao retorna false', () => {
            expect(exer.myFizzBuzz('frase')).toBe(false);
        });
    });
    describe('teste para variavel thereIs1', () => {
        test('thereIs1 é uma variavel definida', () =>{
            expect(exer.thereIs1).not.toBe(undefined);
        });
    });
    describe('teste dos objetos', () => {
        test('obj1 é igual a obj2', () => {
            expect(exer.obj1).toMatchObject(exer.obj2);
        });
        test('obj1 é diferente de obj3', () => {
            expect(exer.obj1).not.toMatchObject(exer.obj3);
        });
        test('obj2 é diferente de obj3', () => {
            expect(exer.obj2).not.toMatchObject(exer.obj3);
        });
    });
    describe('teste da funcao isAbove', () => {
        test( 'tres é maior que 1, true', () => {
            expect(exer.isAbove(3, 1)).toBe(true);
        });
        test( 'tres nao é maior que 1', () => {
            expect(exer.isAbove(1, 3)).toBe(false);
        });
    });
});

