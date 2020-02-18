console.log('Hello from JS');
const canvas = document.querySelector('#canvas');
console.log(canvas);
const ctx = canvas.getContext('2d');
console.log(ctx);

///////////////////////////////////////////////////////////////////////////
///////////////////BOARD CLASS/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
class Board{
    constructor() {

    }
// This function draws black squar canvas
    renderField() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 600, 600);
    }
// This function draws text and outputs score points of P1 & P2
// 'ball' gets the values from 'Ball' class
// to be able to use the values of 'person1Score'
// and 'person2Score'
    text() {
        ctx.fillStyle = "red";
        ctx.font = "40px Arial";
        ctx.fillText(ball.person1Score, 250, 50);
        
        ctx.fillStyle = "red";
        ctx.font = "40px Arial";
        ctx.fillText(ball.person2Score, 350, 50);
        }
}

///////////////////////////////////////////////////////////////////////////
///////////////////BALL CLASS//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// This class is for rendering the ball,
// make the ball stay inside the canvas,
// increment score for players
class Ball{
    constructor(arc_x, arc_y, radius){
        this.arc_x = arc_x;
        this.arc_y = arc_y;
        this.vx = 10;
        this.vy = 5;
        this.radius = radius;
        this.person1Score = '0';
        this.person2Score = '0';
    }

// This function draws a white ball
    renderBall(){
        ctx.beginPath();
        ctx.arc(this.arc_x, this.arc_y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FFF';
        ctx.fill();
    }

// Updates the movement of the ball.
// This function lets the ball bounce from
// all four sides of the wall.
    updateBall() {
        this.arc_x += this.vx;
        this.arc_y += this.vy;
// vx - is the velocity of the ball.
// a score is incremented everytime it hits
// the left or right wall.
        if(this.arc_x <= 0 || this.arc_x >= 600) {
            this.vx = -this.vx
            if(this.arc_x <= 0){
                this.person1Score++
                console.log('Person1: ', this.person1Score)
            }
            else if(this.arc_x >= 600){
                this.person2Score++
                console.log('Person2: ', this.person2Score)
            }
        }
        if(this.arc_y <= 0 || this.arc_y >= 600) {
            this.vy = -this.vy
        }
// With 'paddleLeft' we take the values inside
// the 'Paddle' class. To get the values of the paddles
// This code will make the ball bounce when it 
// collides with the paddles.
        if((this.arc_x-10) === (paddleLeft.paddle_x+20) && (this.arc_y-10) >= paddleLeft.paddle_y && (this.arc_y+10) <= (paddleLeft.paddle_y+80)){
            console.log('hit')
            this.vx = -this.vx
        }
        if((this.arc_x+10) >= (570) && (this.arc_y-10) >= paddleRight.paddle_y && (this.arc_y+10) <= (paddleRight.paddle_y+80)){
            console.log('hit')
            this.vx = -this.vx;
        }
    }
}



///////////////////////////////////////////////////////////////////////////
//////////////////PADDLE CLASS/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// This class is to draw the Left and Right paddles
// This also makes the paddles move up and down
class Paddle {
    constructor(paddle_x, paddle_y) {
        this.paddle_x = paddle_x;
        this.paddle_y = paddle_y;
        this.vply = 0;
        this.vpry = 0;
        this.paddle_width = 20;
        this.paddle_hight = 80;
    }
// this function draws the white paddels
// Left and right paddels
    renderLeftPaddle() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.paddle_x, this.paddle_y, this.paddle_width, this.paddle_hight);
    }
    renderRightPaddle() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.paddle_x, this.paddle_y, this.paddle_width, this.paddle_hight);
    }

// This will prevent the paddles go outside
// the canvas
// vply and vpry is the velocity of each paddles
    moveLeftPaddle() {
        this.paddle_y += this.vply
        if(this.paddle_y <= 0 || (this.paddle_y+80) >= 600){
            this.vply = -this.vply
        } 
    }
    moveRightPaddle() {
        this.paddle_y += this.vpry
        if(this.paddle_y <= 0 || (this.paddle_y+80) >= 600){
            this.vpry = -this.vpry
        }
    }
}


///////////////////////////////////////////////////////////////////////////
////////////////////GAME CLASS/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// This class will output everything from
// Board, Ball, Paddle class.
class Game{
    constructor(){

    }
    resetCanvas(){
        board.renderField();
        board.text();
        ball.renderBall();
    }

//////////////setInterval////////////////
// Using setIntervals it ables to run
// the program every 17milliseconds.
// which is equivalent to 60fps for our
// eyes to see.
    play(){
    setInterval(function() {

        board.renderField();
        board.text();
        ball.renderBall();
        paddleLeft.renderLeftPaddle();
        paddleRight.renderRightPaddle();
        paddleLeft.moveLeftPaddle(); 
        paddleRight.moveRightPaddle();
        ball.updateBall();
        
        
}, 17);    
    }
}

//----------INSTANCE-------------
const board = new Board();
const ball = new Ball(10, 10, 10)
const game = new Game();
const paddleLeft = new Paddle(10, 10)
const paddleRight = new Paddle(570, 510);

//game.resetCanvas();
game.play(); 

//------------Keyboard Keys--------------
const ArrowDownKeyCode = 40;
const ArrowUpKeyCode = 38;
 
document.addEventListener('keydown', (event) => {
    //console.log(event);
    if(event.keyCode === ArrowDownKeyCode) {
        paddleLeft.vply = +10;
    }
    if(event.keyCode === ArrowUpKeyCode){
        paddleLeft.vply = -10;
    }

})

document.addEventListener('keyup', (event) => {
    //console.log(event);
    if(event.keyCode === ArrowDownKeyCode) {
       paddleLeft.vply = 0;
    }
    if(event.keyCode === ArrowUpKeyCode) {
        paddleLeft.vply = 0;
    }
})

const wKeyCode = 87;
const sKeyCode = 83;

document.addEventListener('keydown', (event) => {
    //console.log(event);
    if(event.keyCode === sKeyCode) {
        paddleRight.vpry = +10;
    }
    if(event.keyCode === wKeyCode){
        paddleRight.vpry = -10;
    }

})

document.addEventListener('keyup', (event) => {
    //console.log(event);
    if(event.keyCode === sKeyCode) {
        paddleRight.vpry = 0;
    }
    if(event.keyCode === wKeyCode) {
        paddleRight.vpry = 0;
    }
})

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// //--------BALL----------
// let x = 300;
// let y = 300;
// let vx =10;
// let vy =5;
// //-------Paddle---------
// let plx = 10;
// let ply = 10;
// let prx = 570;
// let pry = 510;
// //-------Button---------
// let vply = 0;
// let vpry = 0;

// function renderField() {
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, 600, 600);
// }


// function renderLeftPaddle(x = 10, y = 10) {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(x, y, 20, 80);
// }

// function renderRightPaddle(x = 10, y = 10) {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(x, y, 20, 80);
// }


// function renderBall(x = 10, y = 10) {
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
//     ctx.fillStyle = '#FFF';
//     ctx.fill();
// }

// let player1Point = 0;
// let player2Point = 0;

// setInterval(() => {
//     renderField();
//     renderLeftPaddle(plx, ply);
//     renderRightPaddle(prx, pry);
//     renderBall(x, y);

//     x += vx;
//     y += vy;   
    

//     if(ply <= 0 || (ply+80) >= 600){
//         vply = -vply
//     }

//     if(pry <= 0 || (pry+80) >= 600){
//         vpry = -vpry
//     }

//     ply += vply
//     pry += vpry

//     if(x <= 0 || x >= 600) {
//         vx = -vx
//         if(x<=0){
//             player1Point++
//             console.log('Player 1: ', player1Point)
//         }
//         else if(x>=600){
//             player2Point++
//             console.log('Player 2: ', player2Point)
//         }
//     }

//     if((x-10) === (plx+20) && (y-10) >= ply && (y+10) <= (ply+80)){
//         console.log('hit')
//         vx = -vx
//     }

//     if(y <= 0 || y >= 600) {
//         vy = -vy
//     }

//     if((x+10) >= (570) && (y-10) >= pry && (y+10) <= (pry+80)){
//         console.log('hit')
//         vx = -vx;
//     }


// }, 17); // 60fps for eyes to see.


// const ArrowDownKeyCode = 40;
// const ArrowUpKeyCode = 38;
    
// document.addEventListener('keydown', (event) => {
//    // console.log(event);
//     if(event.keyCode === ArrowDownKeyCode) {
//         vply = +10;
//     }
//     if(event.keyCode === ArrowUpKeyCode){
//         vply = -10;
//     }

// })

// document.addEventListener('keyup', (event) => {
//     //console.log(event);
//     if(event.keyCode === ArrowDownKeyCode) {
//         vply = 0;
//     }
//     if(event.keyCode === ArrowUpKeyCode) {
//         vply = 0;
//     }
// })

// const wKeyCode = 87;
// const sKeyCode = 83;


// document.addEventListener('keydown', (event) => {
//     //console.log(event);
//     if(event.keyCode === sKeyCode) {
//         vpry = +10;
//     }
//     if(event.keyCode === wKeyCode){
//         vpry = -10;
//     }

// })

// document.addEventListener('keyup', (event) => {
//     //console.log(event);
//     if(event.keyCode === sKeyCode) {
//         vpry = 0;
//     }
//     if(event.keyCode === wKeyCode) {
//         vpry = 0;
//     }
// })

// //document.addEventListener('keyup')

// // when X === frame right side
// // then decrease Y

// //TODO: Left paddle
// //TODO: enhance bouncing to check edge of ball instead of center
// //TODO: Check not only equality so speed can be different other than 0 and 2