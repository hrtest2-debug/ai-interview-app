const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

let level = 1
let score = 0

const gravity = 0.35

let keys = {}

document.addEventListener("keydown",e=>keys[e.key]=true)
document.addEventListener("keyup",e=>keys[e.key]=false)

let player={
x:120,
y:380,
vy:0,
onGround:true
}

let enemies=[]

function spawnEnemies(){

enemies=[]

let count = Math.min(1+Math.floor(level/5),4)

for(let i=0;i<count;i++){

enemies.push({
x:650+Math.random()*200,
y:380,
hp:1,
cooldown:100
})

}

}

spawnEnemies()

let arrows=[]
let enemyArrows=[]

let aiming=false
let startX,startY

canvas.addEventListener("mousedown",e=>{
aiming=true
startX=e.offsetX
startY=e.offsetY
})

canvas.addEventListener("mouseup",e=>{

if(!aiming) return

let dx=startX-e.offsetX
let dy=startY-e.offsetY

arrows.push({
x:player.x,
y:player.y,
vx:dx*0.18,
vy:dy*0.18
})

aiming=false

})

function drawStickman(x,y){

ctx.beginPath()
ctx.arc(x,y-20,10,0,Math.PI*2)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(x,y-10)
ctx.lineTo(x,y+20)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x-10,y+30)
ctx.moveTo(x,y)
ctx.lineTo(x+10,y+30)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x-15,y+10)
ctx.moveTo(x,y)
ctx.lineTo(x+15,y+10)
ctx.stroke()

}

function updatePlayer(){

if(keys["a"]) player.x-=3
if(keys["d"]) player.x+=3

if(keys["w"] && player.onGround){
player.vy=-8
player.onGround=false
}

player.vy+=gravity
player.y+=player.vy

if(player.y>380){
player.y=380
player.vy=0
player.onGround=true
}

}

function updateArrows(){

arrows.forEach(a=>{

a.x+=a.vx
a.y+=a.vy
a.vy+=gravity

})

}

function updateEnemyArrows(){

enemyArrows.forEach(a=>{

a.x+=a.vx
a.y+=a.vy
a.vy+=gravity

})

}

function drawArrows(){

arrows.forEach(a=>{
ctx.beginPath()
ctx.moveTo(a.x,a.y)
ctx.lineTo(a.x-10,a.y)
ctx.stroke()
})

enemyArrows.forEach(a=>{
ctx.beginPath()
ctx.moveTo(a.x,a.y)
ctx.lineTo(a.x+10,a.y)
ctx.stroke()
})

}

function updateEnemies(){

enemies.forEach(e=>{

if(Math.random()<0.01) e.x+=Math.random()*40-20

e.cooldown--

if(e.cooldown<=0){

let dx=e.x-player.x
let dy=e.y-player.y

enemyArrows.push({
x:e.x,
y:e.y,
vx:-dx*0.02,
vy:-dy*0.02-4
})

e.cooldown=120-Math.min(level*5,80)

}

})

}

function checkHits(){

arrows.forEach((a,i)=>{

enemies.forEach((e,ei)=>{

let dx=a.x-e.x
let dy=a.y-e.y
let d=Math.sqrt(dx*dx+dy*dy)

if(d<20){

score+=100

document.getElementById("score").innerText=score

enemies.splice(ei,1)

arrows.splice(i,1)

}

})

})

enemyArrows.forEach((a,i)=>{

let dx=a.x-player.x
let dy=a.y-player.y
let d=Math.sqrt(dx*dx+dy*dy)

if(d<20){

alert("Game Over! Score: "+score)

level=1
score=0

document.getElementById("score").innerText=0
document.getElementById("level").innerText=1

spawnEnemies()

enemyArrows=[]
arrows=[]

}

})

}

function nextLevel(){

if(enemies.length===0){

level++

document.getElementById("level").innerText=level

spawnEnemies()

}

}

function drawEnemies(){

enemies.forEach(e=>drawStickman(e.x,e.y))

}

function drawPlayer(){

drawStickman(player.x,player.y)

}

function gameLoop(){

ctx.clearRect(0,0,canvas.width,canvas.height)

updatePlayer()
updateEnemies()

updateArrows()
updateEnemyArrows()

checkHits()
nextLevel()

drawPlayer()
drawEnemies()

drawArrows()

requestAnimationFrame(gameLoop)

}

gameLoop()
