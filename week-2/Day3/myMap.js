// myMap
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

const array = [1, 4, 9, 16];

function myMap(array) {
    const mul = a => a * 2;
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        a = array[i]
        newArray.push(mul(a))
        
    }
    return newArray
}

console.log(myMap(array));