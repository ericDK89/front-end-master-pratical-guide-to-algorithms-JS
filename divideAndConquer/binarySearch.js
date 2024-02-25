const binarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1

    for(let i = 0; i < end; i++) {
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) return `Index: ${mid}`
        else if(arr[mid] < target) start = mid + 1
        else end = mid - 1
    }

    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Target 5:', binarySearch(arr, 5))
console.log('Target 8:', binarySearch(arr, 8))
console.log('Target 2:', binarySearch(arr, 2))
