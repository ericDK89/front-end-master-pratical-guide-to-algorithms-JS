/*
 * @params {number[]} - arr
 * @return {boolean} - isUnique
*/

const isUnique = (arr) => {
  const validate = {};
  let result = true

  for (let i = 0; i < arr.length; i++) {
    if (validate[arr[i]]) result = false;
    else validate[arr[i]] = true
  }

  return {
    result,
    validate
  }
}

const arr = [1, 1, 3, 4]
// const output = isUnique(arr)
// console.log(output)

const obj = {}
console.log('obj before:', obj)

obj[arr[1]]
console.log('obj after:', obj)
