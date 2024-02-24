/*
 * @params {number} n
 * @return {number} times10
*/

const breadcrumbs = {}

const times10 = (n) => {
    const result = n * 10
    breadcrumbs[n] = result
    return result
}

const memoResult = (n) => {
    if(String(n) in breadcrumbs) {
        console.log('Found it')
        return breadcrumbs[n].value
    } else times10(n)
}


console.log('breadcrumbs before:', breadcrumbs )

memoResult(50)
memoResult(50)

console.log('breadcrumbs after:', breadcrumbs)
