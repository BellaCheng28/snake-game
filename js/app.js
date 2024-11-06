const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const startBtn = document.querySelector("#startBtn");
const playerSelected = document.querySelector("#selected")


const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#b4fcde";
const snakeColor = "#6a99ef";
const snakeBorder = "yellow";
const foodColor = "red";
const unitSize = 25;


let snakeSpeed;
let running = false;
let xSpeed= unitSize;
let ySpeed = 0;
let foodX;
let foodY;
let score = 0;
//set snake length
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];


// addEvenListener :direction,statBtn,playerSelcted
window.addEventListener("keydown", changeDirection);
startBtn.addEventListener('click',gameStart);
playerSelected.addEventListener('change',() => {
    setSpeed();
});

//if game start we need these functions work.
function gameStart(){
    if(running) return;
      running =true;
    
    score = 0;
    xSpeed = unitSize;
    ySpeed = 0;
    snake =[
        {x:unitSize*4,y:0},   
        {x:unitSize*3,y:0},   
        {x:unitSize*2,y:0},   
        {x:unitSize,y:0},   
        {x:0,y:0},   
    ]
    scoreText.textContent = score;
     createFood();
     drawFood();
     setSpeed();
     nextTick();
     
};
function resetGame(){
    running = false; //stop the current game loop
    clearBoard();    //
    gameStart();     //restart the game with cleared board
}


//nextTick make a loop.
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            drawSnake();
            moveSnake();
            checkGameOver();
            nextTick();
        }, snakeSpeed);
    }
    else{
        displayGameOver();
    }
};
    

// clear gameboard draw a square gameboard with lightgreen color,same with the gameboard background color.
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

// set 4 kinds of speeds for player choosing (260,180,120,70)
function setSpeed(){
    switch(playerSelected.value)
    {
        case 'easy':
            snakeSpeed =260;
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

// use arrow keys on the keyboard as buttons to change direction,x coordinate(left and right ),y coordinate(up and down).left and up was negative, right and down were positive.
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

//draw and create random food and make sure that the food is not on the snake. 


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
function isFoodOnSnake(foodX,foodY){
    return snake.some(segment => segment.x ===foodX && segment.y === foodY);
};

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};

// draw snake and snakeborder with the color you like.

function drawSnake(){
    ctx.fillStyle = snakeColor;      //snakeColor you choose
    ctx.strokeStyle = snakeBorder;  //snakeBorder color you  choose
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);      //draw snake color 
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);    // draw snake board color
    })
};


// when snake move ,add one head.
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


function displayGameOver(){
    ctx.font = "40px SimSuncss";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};




