const createNewArray = (length, element) => {
    return Array(length).fill(element)
}

//não utilizar metódos nativos
const reverseArray = (array) => {
    let reversedArray = []
    const arrayLength = array.length

    for (let i = 0; i != arrayLength; i++) {
        let reversedIndex = arrayLength - (1 + i)
        reversedArray[i] = array[reversedIndex]
    }

    return reversedArray
}

const cleanArray = (array) => {
    return array.filter(element => element)
}

const arrayToObject = (arrayOfArrays) => {
    let finalObject = {}
    for (array of arrayOfArrays) {
        finalObject[array[0]] = array[1]
    }

    return finalObject
}

const removeItemsFromArray = (array, ...itemsToRemove) => {
    return array.filter(item => !itemsToRemove.includes(item))
}

const removeDuplicateValuesFromArray = (array) => {
    const cleanedArray = []

    for (element of array) {
        if (!cleanedArray.includes(element)) {
            cleanedArray.push(element)
        }
    }

    return cleanedArray
}

const areArraysEqual = (firstArray, secondArray) => {
    let areEqual = true

    if (firstArray.length != secondArray.length) {
        return areEqual = false
    }

    for (let index = 0; index < firstArray.length; index++) {
        firstArray[index] == secondArray[index] ? null : areEqual = false
    }

    return areEqual
}

const untangleArray = (array) => {
    let cleanedArray = []
    for (element of array) {
        if (typeof element == "object") {
            cleanedArray.push(...element)
        } else {
            cleanedArray.push(element)
        }
    }

    return cleanedArray
}

const divideArrayByValue = (array, value) => {
    let dividedArray = []
    let parts = Math.ceil(array.length / value)

    for (let index = 0; index < parts; index++) {
        dividedArray.push( array.slice(index * value, (index + 1) * value) )
    }

    return dividedArray
}

const findCommonValuesInArrays = (firstArray, secondArray) => {
    let commonValues = []

    for (const element of firstArray) {
        secondArray.includes(element) ? commonValues.push(element) : null
    }

    return commonValues
}

const utils = {
    createNewArray,
    reverseArray,
    cleanArray,
    arrayToObject,
    removeItemsFromArray,
    removeDuplicateValuesFromArray,
    areArraysEqual,
    untangleArray,
    divideArrayByValue,
    findCommonValuesInArrays
}

module.exports = utils