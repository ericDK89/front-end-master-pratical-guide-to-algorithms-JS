const joinElements = (arr, joinString) => {
    let resultSoFar = ''
    let output = ''

    for(let i = 0; i <= arr.length - 1; i++) {
        if(i === arr.length - 1) {
            resultSoFar = arr[i]
            output += resultSoFar
        } else {
            resultSoFar = arr[i] + joinString
            output += resultSoFar
        }
    }

    return output
}

const arr = ['s', 'cr', 't cod', ' :) :)']
const joinString = 'e'

console.log(joinElements(arr, joinString))
