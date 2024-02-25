const mergeSort = (arr) => {
    if(arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)

    const arrL = arr.slice(0, mid)
    const arrR = arr.slice(mid)
    const sortLeft = mergeSort(arrL)
    const sortRight = mergeSort(arrR)

    return merge(sortLeft, sortRight)
}

const merge = (arrL, arrR) => {
    let result = []
    let idxL = 0
    let idxR = 0

    while(idxL < arrL.length && idxR < arrR.length) {
        if(arrL[idxL] < arrR[idxR]) {
            result.push(arrL[idxL])
            idxL++
        } else {
            result.push(arrR[idxR])
            idxR++
        }
    }

    return result.concat(arrL.slice(idxL)).concat(arrR.slice(idxR))
}

console.log(mergeSort([9, 23, 3, 2, 1, 555, 34, 4]))

