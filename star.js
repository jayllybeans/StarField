export class Star {
    x = 50;
    y = 50;
    color = "white";

    constructor(pencil){
        this.pencil = pencil;
    }

    draw() {
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, 50, 0, Math.PI * 2);
        this.pencil.fillStyle = this.color;
        this.pencil.fill();
        this.pencil.closePath();
    }

    move(){
        this.x+=5;
    }
}