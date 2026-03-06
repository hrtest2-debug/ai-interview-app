const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let level = 1;
let gravity = 0.25;

let player = {
x:100,
y:400
};

let enemy = {
x:750,
y:400,
hp:1
};

let arrow = null;

let aiming = false;
let startX,startY;

canvas.addEventListener("mousedown",e=>{
aiming = true;
startX = e.offsetX;
startY = e.offsetY;
});

canvas.addEventListener("mouseup",e=>{

if(!aiming) return;

let dx = startX - e.offsetX;
let dy = startY - e.offsetY;

arrow = {
x:player.x,
y:player.y,
vx:dx*0.15,
vy:dy*0.15
};

aiming=false;

});

function drawStickman(x,y){

ctx.beginPath();
ctx.arc(x,y-20,10,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x,y-10);
ctx.lineTo(x,y+20);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x-10,y+30);
ctx.moveTo(x,y);
ctx.lineTo(x+10,y+30);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x-15,y+10);
ctx.moveTo(x,y);
ctx.lineTo(x+15,y+10);
ctx.stroke();

}

function drawArrow(){

if(!arrow) return;

ctx.beginPath();
ctx.moveTo(arrow.x,arrow.y);
ctx.lineTo(arrow.x-10,arrow.y);
ctx.stroke();

arrow.x += arrow.vx;
arrow.y += arrow.vy;

arrow.vy += gravity;

}

function checkHit(){

if(!arrow) return;

let dx = arrow.x - enemy.x;
let dy = arrow.y - enemy.y;

let dist = Math.sqrt(dx*dx+dy*dy);

if(dist < 20){

level++;
document.getElementById("level").innerText = level;

enemy.x = 650 + Math.random()*150;
enemy.hp = 1;

arrow = null;

}

}

function drawEnemy(){

drawStickman(enemy.x,enemy.y);

}

function drawPlayer(){

drawStickman(player.x,player.y);

}

function gameLoop(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawPlayer();
drawEnemy();

drawArrow();

checkHit();

requestAnimationFrame(gameLoop);

}

gameLoop();
