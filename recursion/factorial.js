const factorialRecursive = (n, result, start) => {
    if(start > n) return `Resultado: ${result}`
    
    return factorialRecursive(n, result * start, start + 1)
}

const solution = (n) => {
    let result = 1
    let start = 1

    return factorialRecursive(n, result, start)
}

console.log(solution(5))
