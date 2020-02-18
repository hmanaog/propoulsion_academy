let a = '324';

reverseArr = (num) => {
    let arr = [];
    let compare = ''
    let newArr = []
    for(let i = 0; i < num.length; i++){
        //console.log(num[i])
        arr.push(num[i])
    } 
    arr = arr.sort();
    for(let j = arr.length-1; j >= 0; j--){
        console.log(arr[j]);
        newArr.push(arr[j]);
    }
    return newArr;
}

console.log(reverseArr(a))