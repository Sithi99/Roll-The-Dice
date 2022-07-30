let images = ["dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"]
    let dice = document.querySelectorAll("img");

var Player1 ={
    Name: "Player1",
    score: 0,
    displayScore: function(){
        player1Score.innerHTML = "Score: "+this.score;
    }
}

var Player2 ={
    Name: "Player2",
    score: 0,
    displayScore: function(){
        player2Score.innerHTML = "Score: "+this.score;
    }
}


let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

var currentPlayer = Player1;


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

function changePlayer(){
    if(currentPlayer.Name == "Player1"){
        currentPlayer = Player2;
        
    }
    else{
        currentPlayer = Player1;
        
    }
}

function checkWinner(){
    if(Player1.score >= 100 ){
        alert("Player 1 Won !! Press 'ok' to restart.");  
        restart(); 
    }

    if(Player2.score >= 100){
        alert("Player 2 Won !! Press 'ok' to restart.");  
        restart();
    }
}

function restart(){
    Player1.score = 0;
    Player2.score = 0;
    Player1.displayScore();
    Player2.displayScore();   
}