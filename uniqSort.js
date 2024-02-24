/*
 * @params {number[]} arr
 * @return {number[]} uniqSort
*/

const uniqSort = (arr) => {
  const breadcrumbs = {}
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i])
      breadcrumbs[arr[i]] = true
    }
  }

  return result.sort((a, b) => a - b) //sort to crescent order
}

const arr = [9, 1, 2, 3, 4, 4, 12, 5, 6, 6, 6, 12, 7, 9, 7, 8, 8, 10, 10]
const output = uniqSort(arr)
console.log('breadcrumbs:', output)


