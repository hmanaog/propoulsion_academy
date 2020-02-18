const sortedInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15 ,16 ,17 ,18 ,19 ,20];
//const sortedInt = [];
const query = 4;

function binarySearch(sortedInt, query) {

    if (sortedInt.length === 0) {
        return -1
    }

    let halfSortedInt = Math.floor(sortedInt.length/2)
    //console.log('Half of array: ', sortedInt[halfSortedInt])

    if (sortedInt[halfSortedInt] > query) {
        for (let i = Math.floor(sortedInt.length/2)-1; i >= 0; i--) {
            //console.log(sortedInt[i], ' ', i);
            if(sortedInt[i] === query) {
                return `${query} is in index ${i}`
            }
        }
    }

    if (sortedInt[halfSortedInt] < query) {
        for (let i = Math.floor(sortedInt.length/2); i <= sortedInt.length; i++) {
            //console.log(sortedInt[i], ' ', i);
            if(sortedInt[i] === query) {
                return `${query} is in index ${i}`
            }
        }
    }
}

binarySearch(sortedInt, query)

console.log('Binary Search: ', binarySearch(sortedInt, query))
