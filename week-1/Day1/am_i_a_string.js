stringCheck = (isString) => {
    return (typeof isString === 'string' ? true : false);
}

console.log(stringCheck('hello')); // => true
console.log(stringCheck(['hello'])); // => false
console.log(stringCheck('this is a long sentence')); // => true
console.log(stringCheck({ a: 2 })); // => false