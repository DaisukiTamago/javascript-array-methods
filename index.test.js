const { expect } = require("@jest/globals");
const { describe } = require("yargs");

const utils = require("./utils/index")

test("Implemente um método que crie um novo array baseado nos valores passados.", () => {
    let input = [3,'a']
    let expectedOutput = ['a', 'a', 'a']
    expect(utils.createNewArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método que inverta um array, não utilize métodos nativos do array.", () => {
    let input = [[1,2,3,4]]
    let expectedOutput = [4,3,2,1]
    expect(utils.reverseArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).", () => {
    let input = [[1,2,'', undefined]]
    let expectedOutput = [1,2]
    expect(utils.cleanArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.", () => {
    let input = [[["c",2],["d",4]]]
    let expectedOutput = {c:2, d:4}
    expect(utils.arrayToObject(...input)).toEqual(expectedOutput)
})

test("Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada", () => {
    let input = [[5,4,3,2,5], 5,3]
    let expectedOutput = [4,2]
    expect(utils.removeItemsFromArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método que retorne um array, sem valores duplicados.", () => {
    let input = [[1,2,3,3,2,4,5,4,7,3]]
    let expectedOutput = [1,2,3,4,5,7]
    expect(utils.removeDuplicateValuesFromArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.", () => {
    let input = [[1,2,3,4],[1,2,3,4]]
    let expectedOutput = true
    expect(utils.areArraysEqual(...input)).toBeTruthy()
})

test("Implemente um método que remova os aninhamentos de um array de arrays para um array unico", () => {
    let input = [[1, 2, [3], [4, 5]]]
    let expectedOutput =  [1, 2, 3, 4, 5]
    expect(utils.untangleArray(...input)).toEqual(expectedOutput)
})

test("Implemente um método divida um array por uma quantidade passada por parâmetro", () => {
    let input = [[1, 2, 3, 4, 5], 2]
    let expectedOutput = [[1, 2], [3, 4], [5]]
    expect(utils.divideArrayByValue(...input)).toEqual(expectedOutput)
})

test("Implemente um método que encontre os valores comuns entre dois arrays.", () => {
    let input = [[6, 8], [8, 9]]
    let expectedOutput = [8]
    expect(utils.findCommonValuesInArrays(...input)).toEqual(expectedOutput)
})