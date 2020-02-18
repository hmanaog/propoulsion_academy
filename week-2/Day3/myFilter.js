// myFilter
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

const array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function myFilter() {
    const lessThan = a => a > 6
    const newArray = []
    for(let i = 0; i < array.length; i++){
        if(lessThan(array[i].length) === true) {
            newArray.push(array[i])
        }
        // const filtered = lessThan(array[i].length) // RETURNS TRUE
        // console.log('fitered: ', filtered)       
    }
    return newArray;
}

console.log('myFilter: ', myFilter(array))