let tracker = 0

const callMe = () => {
    tracker++
    
    if(tracker === 3) return 'end' // base case
    
   return callMe()
}

console.log(callMe())


// const callMy = () => {
//     for(let i = 0; i <= 3; i++) {
//         tracker++
//         if(tracker === 3) return tracker }
//
//     return -1
// }
//
//     console.log(callMy())



