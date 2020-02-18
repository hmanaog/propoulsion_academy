///////////////////////////////////////////////////////
/////////////////////BOARD CLASS///////////////////////
///////////////////////////////////////////////////////

class Board {
    constructor(boardPositionX, boardPositionY, boardWidth, boardHeight) {
        this.boardPositionX = boardPositionX;
        this.boardPositionY = boardPositionY;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.image;
    }
    renderBoard() {
        ctx.fillStyle = 'beige';
        ctx.fillRect(this.boardPositionX, this.boardPositionY, this.boardWidth, this.boardHeight);
        this.image = document.getElementById("background");
        ctx.drawImage(this.image, 0, 0, 800, 600)

        ctx.fillStyle = 'Black';
        ctx.fillRect(0, 600, 800, 200);

        ctx.fillStyle = 'White';
        ctx.font = "25px Comic Sans MS";
        ctx.fillText("Press ENTER to play", 0, 660);
        ctx.fillText("Press SPACEBAR to reset the game", 0, 710);
        ctx.fillText("Press LEFT ARROW or RIGHT ARROW to move the paddle", 0, 760);
    }
}