# Project Proposal 

## Project Choice (Tell us which project you're doing!)

- [ ] Snake Game


## Project Description 

My app is called snake game. It's a game app for players who want to play snake games online. It is a timeless arcade-style game where players control a growing snake that must navigate a grid,eat food to increase its length.and avoid colliding with walls or its own tail.The objective is to score as high as possible while managing the increasing difficulty as the snake grows.

## Wire Frames

**Initial Landing View**

![image](https://github.com/BellaCheng28/snake-game/blob/main/1.png)

**Results View**

![image](https://github.com/BellaCheng28/snake-game/blob/main/2.png)

## User Stories

#### MVP Goals

- As a player, I want to control snake movement with arrow keys,so that I can navigate it effectively.
- As a player, I want  my snake eats food and grow longer ,so that i can see my progress
- As a player, I want to display my score on the screen,so that I know my performance.
- As a player, I want to know which level  stage i played.so that i know the snake game is easy or difficult .
- As a player, I want to know if the game is over when my snake collides with the wall or the snake 's own or other’s body,so that i know the game rules.
- As a player, I would like to be able to restart the game after a win, loss or tie.
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.

#### Stretch Goals

- Track the player’s score based on the number of food items consumed.
- Display the score on the screen.
- End the game when the snake collides with itself or the walls.
- Provide feedback to the player, such as a game over message and the final score.
- Allow player to pause the game and continue later within couple minutes


#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )


#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:


Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |    Task                                                       |    Blockers           |  Notes/ Thoughts                  
|------------|---------------------------------------------------------------|-----------------------|-------------------------------------------------------------------------------
| Monday     | Think proposal and create the proposal                        |                       |  Write down my ideas on draft,Remove infeasible content,Connect with github       
| Tuesday    | Wirte basic scaffolding, create html,css,js files             |                       |  Think about the game layout and think about how to add more features            
| Wednesday  | Wirte more features and enrich the game content               |                       |  Test and remove the impractical features                        
| Thursday   | Finish the game and test the game                             |                       |  Invite partner to play and take advices                                          
| Friday     | Implement MVP goals                                           |                       |                              
| Monday     | Continue work on MVP goals and start to work on stretch goals |                       |  Such as view and Presenter                                                  
| Tuesday    | Continue work on stretch goals                                |                       |  Such as dispaly      
| Wednesday  | Continue Test and check the game                              |                       |  Make game run smooth                                
| Thursday   | Presentation Day!                                             |                       |                          

 1) Define any variables used to track the state of the game:
  - Set snake as empty list
  - Set direction to right
  - Set score to 0
  - Generate food at radom position

 2) Define the required constants:
  - There are couple constants required to be defined.We need gameBoard,gameWidth 
     and gameHeight for snake to play .We also need difine retart buttom when game 
     is over.The color of the snake and food we can choose what we like .
  - We'll need a reference to a DOM element to display messages,use the 
      querySelector method to select gameBoard score and reset bottom as so on. 

 3) setting rules for snake game 
  - While game is runnig,clear screen,update snake position based on direction.Check 
    for collision
       - if collision with food (grow snake,increase score,draw new food),
       - if collision with wall or itself( game over)
       - else no collision,snake keeps going and wait for player input to change 
         direction
  4)Use function and others methods to wirte basic scaffolding
       - function grow snake:add new snakePart to snake at the front
       - function change direction:press up key,the snake goes up;press down key,the 
          snake goes down;press left,the snake goes right.
       - function Snake move.when player move the snake,and eat food,the snake grow 
          up and the score changes on screen and new food should be draw on the 
          screen   
       - function generate food,randomly select position that is not occupied by the 
         snake return new food position
       - function end game,display game over message on screen,and show the final 
          score,wait for player input to restart or exit.


















