///////////////////////////////////////////////////////
///////////////////PADDLE CLASS////////////////////////
///////////////////////////////////////////////////////

class Paddle {
    constructor(paddle_x, paddle_y) {
        this.paddle_x = paddle_x;
        this.paddle_y = paddle_y;
        this.vectorPaddle = 0;
        this.paddle_width = 80;
        this.paddle_height = 20;
    }

    renderPaddle() {
        ctx.fillStyle = '#6347FF';
        ctx.fillRect(this.paddle_x, this.paddle_y, this.paddle_width, this.paddle_height);
    }
    
    movePaddle() {
        this.paddle_x += this.vectorPaddle;
        if(this.paddle_x <= 0 || (this.paddle_x+80) >= 800) {
            this.vectorPaddle = -this.vectorPaddle;
        }
        
        const ArrowLeftKeyCode = 37;
        const ArrowRightKeyCode = 39;

        document.addEventListener('keydown', (event) => {
            if(event.keyCode === ArrowLeftKeyCode) {
                this.vectorPaddle = -10;
            }
            if(event.keyCode === ArrowRightKeyCode){
                this.vectorPaddle = +10;
            }
        })

        document.addEventListener('keyup', (event) => {
            //console.log(event);
            if(event.keyCode === ArrowLeftKeyCode) {
                this.vectorPaddle = 0;
            }
            if(event.keyCode === ArrowRightKeyCode) {
                this.vectorPaddle = 0;
            }
        })
    }
}
