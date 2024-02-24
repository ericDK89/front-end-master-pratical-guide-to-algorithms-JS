const times10 = (n) => n * 10

const memoizedClosureTimes10 = () => {
    let cache = {}

    return (n) => {
        if(n in cache) return cache[n]
        else {
            let result = times10(n)
            cache[n] = result
            return result
        }
    }
}

const memo10 = memoizedClosureTimes10()

try {
 console.log('9:', memo10(9)) //calculating
 console.log('9:', memo10(9)) //cached


} catch(e) {
    console.log('message:', e)
}
