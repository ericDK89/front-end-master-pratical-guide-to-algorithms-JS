/*
 * @params {number} amount
 * @return {number[]} coins 
 * @return {coins} withdraw
*/ 

const coins = (amount, result) => {
    let outAmount = amount

    while(outAmount > 0) {
        if(outAmount === 25) {
            outAmount = 0
            result.push(25)
        } else if(outAmount > 25) {
            outAmount = outAmount - 25
            result.push(25)
        }else if(outAmount === 10) {
            outAmount = 0
            result.push(10)
        } else if(outAmount > 10) {
            outAmount = outAmount - 10
            result.push(10)
        } else if(outAmount === 5) {
            outAmount = 0
            result.push(5)
        } else {
            outAmount = outAmount - 5
            result.push(5)
        }
    }

    return result
}

const withdraw = (amount) => {
    let result = []

    if(amount < 5) return 
    if(amount === 0) return result

    return coins(amount, result)
}

console.log(withdraw(40))
console.log(withdraw(35))
console.log(withdraw(20))

//coins 5, 10, 25
//amount: 40 => 3 coins => 25, 10, 5
//amount: 35 => 2 coins => 25, 10
//amount: 20 => 2 coins => 10, 10
