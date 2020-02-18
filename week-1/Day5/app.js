//console.log('Hello from JS');
const canvas = document.querySelector('#canvas');
//console.log(canvas);
const ctx = canvas.getContext('2d');
//console.log(ctx);

///////////////////////////////////////////////////////
/////////////////////GAME CLASS////////////////////////
///////////////////////////////////////////////////////

class Game {
    constructor() {

        this.ball = new Ball(410,560);
        this.paddle = new Paddle(370, 580);
        this.block = new Block([0, 0], 40, 90)
        this.board = new Board(0, 0, 800, 600)
        this.pause = this.pause;
        this.score = 0;
    }

    reset() {
        this.board.renderBoard();  
        this.block.renderBlocks();
        this.ball.renderBall();
        this.paddle.renderPaddle();
    }

    play() {
        this.pause = setInterval(() => {
            this.board.renderBoard();
            this.block.renderBlocks();
            this.ball.renderBall();
            this.paddle.renderPaddle();
            game.blockCollide();
            this.ball.move();   
            this.paddle.movePaddle();
            game.collide();
        }, 17);        
    }

    collide(){
        if((this.ball.arc_y+10) === this.paddle.paddle_y&& (this.ball.arc_x-10) >= this.paddle.paddle_x && (this.ball.arc_x+10) <= (this.paddle.paddle_x+80)){
            //console.log('hit'); 
            this.ball.vectorY = -this.ball.vectorY
         }

         if(this.ball.arc_y+10 >= 600) {

            ctx.fillStyle = 'White';
            ctx.font = "40px Comic Sans MS";
            ctx.fillText(`GAME OVER`, 280, 350);

            clearInterval(game.pause)

            setInterval(() => {
                document.location.reload();
                game.reset()
            }, 1000);
         }
    }

    blockCollide() {
        for (let column = 0; column < this.block.blockColumn; column++){
            for (let row = 0; row < this.block.blockRow; row++) {
                let blocks = this.block.blockArray[column][row];
                if (blocks.status == 1) {
                if(this.ball.arc_x > blocks.x && this.ball.arc_x < (blocks.x+this.block.blockWidth) && this.ball.arc_y > blocks.y && this.ball.arc_y < (blocks.y+this.block.blockHeight)) {
                    this.ball.vectorY = -this.ball.vectorY
                    blocks.status = 0;
                        this.score++;
                        console.log("score: ", this.score)
                        if(this.score === this.block.blockColumn*this.block.blockRow) {
                            ctx.fillStyle = 'white';
                            ctx.font = "40px Comic Sans MS";
                            ctx.fillText(`CONGRATULATIONS!, YOU WIN`, 75, 350);
                            clearInterval(game.pause)
                        }
                    }
                }
            }
        }
    }

    appStart() {
        const EnterKeyCode = 13;
        const SpaceBarKeyCode = 32;

        let countEnter = 0;

        game.reset();

        document.addEventListener('keydown', (event) => {
            if(event.keyCode === EnterKeyCode && countEnter === 0) {
                game.play();
                countEnter++
                console.log("enter: ", countEnter)
        }
            else if(event.keyCode === EnterKeyCode && countEnter === 1 && this.score === this.block.blockColumn*this.block.blockRow) {
                document.location.reload();
                game.reset()
        }
            else if(event.keyCode === EnterKeyCode && countEnter === 1) {
                clearInterval(game.pause)
                countEnter += -1;
                console.log("enter: ", countEnter)
        }


            if(event.keyCode === SpaceBarKeyCode){
                console.log("RESET")
                document.location.reload();
                game.reset()
            }
        })
    }
}

const game = new Game();
game.appStart();

