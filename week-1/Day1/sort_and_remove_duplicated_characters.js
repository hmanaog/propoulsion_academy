let a = 'xyaabbbccccdefw'
let b = 'xxxxyyyyabklmopq'
        
longest = (arg1, arg2) => {
    let newStr = ''
    if(arg1.length < arg2.length){
        for(let i = 0; i < arg2.length; i++){
            if(newStr.indexOf(arg2[i]) === -1){
                newStr += arg2[i];
            }
        }
    }
    let splitString = newStr.split('').sort()
    // console.log(splitString)
    let assortedString = ''
    for(let j = 0; j < splitString.length; j++){
        assortedString += splitString[j]
    }
  
    return assortedString;
}

console.log(longest(a,b))
// for(let i = 0; i<b.length; i++){
//     if(sort.indexOf(b[i]) === -1){
//         sort += b[i];
//     }
// }
// console.log(sort)