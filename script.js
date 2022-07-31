let images = ["dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"]
    let dice = document.querySelectorAll("img");

var player1 ={
    name: "player1",
    score: 0,
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


let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

var currentPlayer = player1;


function rollDice()
{
    
    let firstDiceValue = Math.floor(Math.random()*6 + 1);
    let secondDiceValue = Math.floor(Math.random()*6 + 1);

    document.querySelector("#dice-1").setAttribute("src",images[firstDiceValue - 1]);
    document.querySelector("#dice-2").setAttribute("src",images[secondDiceValue - 1]);


    let total = firstDiceValue + secondDiceValue;

    if(firstDiceValue==1 && secondDiceValue==1){
        currentPlayer.score = 0;
        currentPlayer.displayScore();
        changePlayer();
    }
    else if(firstDiceValue == secondDiceValue){
        currentPlayer.score +=  total;
        currentPlayer.displayScore();
    }
    else{
        currentPlayer.score += total;
        currentPlayer.displayScore();
        changePlayer();
        
    }

    checkWinner();
    
}

function newGame()
{
    restart();
}

function changePlayer(){
    if(currentPlayer == player1){
        currentPlayer = player2;
        
    }
    else{
        currentPlayer = player1;
        
    }
}

let p1 = document.querySelector("#P1");
let p2 = document.querySelector("#P2");
let rollButton = document.querySelector("#rollButton");

function checkWinner(){
    if(player1.score >= 100 ){
        p1.innerHTML = "WINNER!";
        rollButton.style.display = "none";
  
    }


    if(player2.score >= 100){
        p2.innerHTML = "WINNER!";
        rollButton.style.display = "none";
        
    }
}

function restart(){
    player1.score = 0;
    player2.score = 0;
    p1.innerHTML = "PLAYER l";
    p2.innerHTML = "PLAYER ll";
    player1.displayScore();
    player2.displayScore();
    rollButton.style.display = null;   
}