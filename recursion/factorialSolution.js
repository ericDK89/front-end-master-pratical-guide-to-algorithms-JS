const factorialRecursive = (n, result = 1, start = 2) => {
    const cache = {}

    if(String(n) in cache) return cache[n]

    if(n === 0) return 1

    if(start > n) {
        cache[n] = result
        return result
    }

    return factorialRecursive(n, result * start, start + 1)
}

console.log(factorialRecursive(1))
