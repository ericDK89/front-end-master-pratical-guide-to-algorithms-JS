const coins = (amount) => {
    if(amount < 5) return

    const coins = [25, 10, 5]
    
    let result = []
    let i = 0

    while(amount > 0) {
        if(coins[i] <= amount) {
            amount -= coins[i]
            result.push(coins[i])
        } else i++
    }

    return {
        result,
        totalCoins: result.length
    }
}

console.log(coins(10))
