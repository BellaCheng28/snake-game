const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const startBtn = document.querySelector("#startBtn");
const playerSelected = document.querySelector("#selected")

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "rgb(209, 248, 240)";
const snakeColor = "pink";
const snakeBorder = "yellow";
const foodColor = "rgb(142, 148, 241)";
const unitSize = 25;


let snakeSpeed;
let running = false;
let xSpeed= unitSize;
let ySpeed = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
startBtn.addEventListener("click", resetGame);
playerSelected.addEventListener('change',() => {
    setSpeed();
});


function gameStart(){
    running=true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
    setSpeed();
};

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
            setSpeed();
        }, snakeSpeed);
    }
    else{
        displayGameOver();
    }
};
    
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }

     do{
        foodX = randomFood(0,gameWidth - unitSize);
        foodY = randomFood(0,gameWidth - unitSize);
     } while(isFoodOnSnake(foodX,foodY));  
};

function isFoodOnSnake(x,y){
    return snake.some(segment => segment.x ===x && segment.y === y);
}

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    const head = {x: snake[0].x + xSpeed,
                  y: snake[0].y + ySpeed};
    
    snake.unshift(head);
    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+=1;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop();
    }     
};
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (ySpeed == -unitSize);
    const goingDown = (ySpeed == unitSize);
    const goingRight = (xSpeed == unitSize);
    const goingLeft = (xSpeed == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xSpeed = -unitSize;
            ySpeed = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xSpeed = 0;
            ySpeed = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xSpeed = unitSize;
            ySpeed = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xSpeed = 0;
            ySpeed = unitSize;
            break;
    }
};
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
                running = false;
                break;
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

// set 4 kinds of speeds for player choosing 

function setSpeed(){
    switch(playerSelected.value)
    {
        case 'easy':
            snakeSpeed = 260;
            break;
        case 'normal':
            snakeSpeed = 180;
            break;
        case 'difficulty':
            snakeSpeed = 120;
            break;
        case 'hell':
            snakeSpeed = 70;
            break;
    }
}
function displayGameOver(){
    ctx.font = "40px SimSuncss";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};
function resetGame(){
    score = 0;
    xSpeed = unitSize;
    ySpeed = 0;  
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};

