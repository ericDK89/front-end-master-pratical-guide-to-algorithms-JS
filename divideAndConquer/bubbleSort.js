const bubbleSort = (arr) => {
    if(arr.length < 2) return 

    let end = arr.length - 1

    let sorted;

    do {
        sorted = false
        for(let i = 0; i <= end; i++) {
            if(arr[i] && arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                sorted = true
            }
        }
    } while(sorted)

    return arr
}

const arr = [99, 50, 40, 30, 23, 10, 100]
console.log(bubbleSort(arr))
