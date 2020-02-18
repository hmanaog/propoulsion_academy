// const myMath = Object.create(Math)
// console.log(myMath)

// function randomInt(max){
//     return Math.floor(Math.random() * Math.floor(max));
// }
// console.log(randomInt(5))

function myMath(max){

    function randomInt(max){
        console.log(Math.floor(Math.random() * Math.floor(max)));
    }

    return {random: randomInt}
}

const randomNum = myMath()
randomNum.random(5);
