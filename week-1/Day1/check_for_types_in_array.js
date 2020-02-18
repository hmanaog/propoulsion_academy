areSameType = (arr) => {
    return new Set(arr.map(x => typeof x)).size <= 1;
}

console.log(areSameType(['hello', 'world', 'long sentence'])) // => true
console.log(areSameType([1, 2, 9, 10])) // => true
console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true