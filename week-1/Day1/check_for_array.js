checker = (arrCheck) => {
    return Array.isArray(arrCheck) === true ? true : false;
}

console.log(checker('hello')); // => false
console.log(checker(['hello'])); // => true
console.log(checker([2, {}, 10])); // => true
console.log(checker({ a: 2 })); // => false