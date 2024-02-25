const times10 = (n) => n * 10

const memoize = (cb) => {
    let cache = {}

    return (n) => {
        if(n in cache) return cache[n]
        else {
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}

const memoizedTimes10 = memoize(times10)

try {
    console.log(memoizedTimes10(9))
} catch(e) {
    console.log(e)
}
