//Store dice's side images using array
let images = ["dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"]


let dice = document.querySelectorAll("img");

//Used to update player's score in the game interface 
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");


//Create two objects for players
var player1 ={
    name: "player1",
    score: 0,
    //Display score in the game interface
    displayScore: function(){
        player1Score.innerHTML = "SCORE : "+this.score;
    }
}

var player2 ={
    name: "player2",
    score: 0,
    displayScore: function(){
        player2Score.innerHTML = "SCORE : "+this.score;
    }
}


//Initially assign currentPlayer to player1 (So game start from player 1)
var currentPlayer = player1;


function rollDice()
{
    //Create two random numbers for the dices
    let firstDiceValue = Math.floor(Math.random()*6 + 1);
    let secondDiceValue = Math.floor(Math.random()*6 + 1);

    //Display the results
    document.querySelector("#dice-1").setAttribute("src",images[firstDiceValue - 1]);
    document.querySelector("#dice-2").setAttribute("src",images[secondDiceValue - 1]);

    //Get the total of two random values
    let total = firstDiceValue + secondDiceValue;

    //Checking if the player rolls a 1 twice in a row
    if(firstDiceValue==1 && secondDiceValue==1){
        //Then player loses his entire score
        currentPlayer.score = 0;
        currentPlayer.displayScore();
        changePlayer();
    }
    //Checking if the two dices give the same result
    else if(firstDiceValue == secondDiceValue){
        //Add total to the player's score
        currentPlayer.score +=  total;
        currentPlayer.displayScore();
    }
    //checking if player rolls different values in a row 
    else{
        currentPlayer.score += total;
        currentPlayer.displayScore();
        changePlayer();
        
    }
    //Check if a player won the game
    checkWinner();
    
}

//Function to giving the turn to the next player
function changePlayer(){
    if(currentPlayer == player1){
        currentPlayer = player2;
        
    }
    else{
        currentPlayer = player1;
        
    }
}

//Used to change 'PLAYER' to winner
let p1 = document.querySelector("#P1");
let p2 = document.querySelector("#P2");

//Used to hide 'ROLL DICE' button after the winner found
let rollButton = document.querySelector("#rollButton");

//Function to check if a player won the game
function checkWinner(){
    if(player1.score >= 100 ){
        p1.innerHTML = "WINNER!";
        //After winner found hiding the 'ROLL DICE' button
        rollButton.style.display = "none";
    }

    if(player2.score >= 100){
        p2.innerHTML = "WINNER!";
        rollButton.style.display = "none";
    }
}

//Restarting the game after clicking the 'New Game' button
function newGame()
{
    restart();
}

//Function to restart the game
function restart(){

    //Setting both score back to 0
    player1.score = 0;
    player2.score = 0;

    //Setting 'WINNER' back to player name
    p1.innerHTML = "PLAYER l";
    p2.innerHTML = "PLAYER ll";

    //Display the scores in the game interface
    player1.displayScore();
    player2.displayScore();

    //Display the hid 'ROLL DICE' button
    rollButton.style.display = null;   
}