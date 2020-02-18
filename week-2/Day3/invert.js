// Invert
// invert({ a: 3, b: 2 }); // { 2: 'b', 3: 'a' }

const obj = {
    a: 3,
    b: 2
}
console.log(obj)
const keys = Object.keys(obj)
console.log('Keys ', keys)
const values = Object.values(obj)
console.log('Values: ', values)

const newObj = {keys : values}
console.log('newObj: ', newObj)

console.log('Entries: ', Object.entries(obj))

// const objToArr = Object.entries(obj).reverse()
// console.log('return an array and reverse: ', Object.entries(obj).reverse())
// console.log('objToArr: ', objToArr)

// const newObj = Object.assign(objToArr)
// console.log('newObj: ', newObj)

// console.log(Object.entries(newObj))