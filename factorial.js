const times10 = (n) => n * 10

const breadcrumbs = {}

const isCalculated = (n) => {
  if (breadcrumbs.hasOwnProperty(n)) {
    console.log('Caching', n)
    return breadcrumbs[n]
  }
  else {
    const result = times10(n)
    breadcrumbs[n] = result
    console.log('breadcrumbs[n]:', breadcrumbs[n])
    console.log('Calculating')
    return result
  }
}       
       
const outputOne = isCalculated(99999999999999)

console.log(outputOne, new Date())

const outputTwo = isCalculated(99999999999999)

