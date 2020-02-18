// myEach
const array = [1, 2, 3]

function myEach(array, fb) {
    for(let i = 0; i < array.length; i++) {
        fb(array[i])
    }
}

console.log(myEach(array, console.log))