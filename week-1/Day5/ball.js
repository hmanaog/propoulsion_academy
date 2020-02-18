///////////////////////////////////////////////////////
/////////////////////BALL CLASS////////////////////////
///////////////////////////////////////////////////////

class Ball {
    constructor(arc_x, arc_y, radius) {
        this.arc_x = arc_x;
        this.arc_y = arc_y;
        this.radius = 6;
        this.vectorX = 5;
        this.vectorY = 5;

     }
     renderBall() {
         ctx.beginPath();
         ctx.arc(this.arc_x, this.arc_y, this.radius, 0, 2 * Math.PI, false);
         ctx.fillStyle = 'gold';
         ctx.fill();
         ctx.closePath();
     }
     move() {
         this.arc_x += this.vectorX;
         this.arc_y += this.vectorY;

         if(this.arc_x-10 <= 0 || this.arc_x+10 >= 800) {
             this.vectorX = -this.vectorX;
         }

         if(this.arc_y-10 <= 0 || this.arc_y+10 >= 600) {
            this.vectorY = -this.vectorY;
         }
     }
}
