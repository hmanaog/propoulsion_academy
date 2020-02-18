///////////////////////////////////////////////////////
/////////////////////BLOCK CLASS///////////////////////
///////////////////////////////////////////////////////

class Block {
    constructor(blockPosition, blockHeight, blockWidth, blockColor) {
        this.blockPosition = [blockPosition[0],blockPosition[1]];
        this.blockHeight = blockHeight;
        this.blockWidth = blockWidth;
        this.blockColor = blockColor;

        this.blockRow = 5;
        this.blockColumn = 8;
        this.blockOffsetTop = 15;
        this.blockOffsetLeft = 15;
        this.blockPadding = 7;
        this.blockArray = [];
        for(let column = 0; column < this.blockColumn; column++){
            this.blockArray[column] = [];
            for(let row = 0; row < this.blockRow; row++) {
                this.blockArray[column][row] = { x: 0, y: 0, status: 1};
            }
        }
    }
    
    renderBlocks() {
        for(let column = 0; column < this.blockColumn; column++){
            for(let row = 0; row < this.blockRow; row++){
                if(this.blockArray[column][row].status == 1){
                let blockX = (column*(this.blockWidth+this.blockPadding))+this.blockOffsetLeft;
                let blockY = (row*(this.blockHeight+this.blockPadding))+this.blockOffsetTop;
                this.blockArray[column][row].x = blockX;
                this.blockArray[column][row].y = blockY;
                ctx.fillStyle = "#6347FF"
                ctx.fillRect(blockX, blockY, this.blockWidth, this.blockHeight);
                ctx.closePath();
                }
            } 
        }
    }
}