let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

import {Star} from "./star.js";

let stars = [new Star(pencil)];

function gameLoop() {
    //draw background
    pencil.fillStyle = "black";
    pencil.fillRect(0, 0, canvas.clientWidth, canvas.height);
    //draw stars

    //the stars go shimmy

    //recycle stars
}

setInterval(gameLoop, 50);