const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === target) return `Index: ${i}`
    }

    return -1
}

const arr = [2, 6, 7, 90, 103]
const target = 90

console.log(linearSearch(arr, target))
