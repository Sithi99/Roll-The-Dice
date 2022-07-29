let images = ["dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"]
    let dice = document.querySelectorAll("img");

var Player1 ={
    Name: "Player1",
    Total: 0
}

var Player2 ={
    Name: "Player2",
    Total: 0
}


let scorePlayer1 = document.querySelector("#player1Score");
let scorePlayer2 = document.querySelector("#player2Score");

var currentPlayer = Player1;


function rollDice()
{
    
    let firstDiceValue = Math.floor(Math.random()*6 + 1);
    let secondDiceValue = Math.floor(Math.random()*6 + 1);

    console.log(firstDiceValue,secondDiceValue);

    document.querySelector("#dice-1").setAttribute("src",images[firstDiceValue - 1]);
    document.querySelector("#dice-2").setAttribute("src",images[secondDiceValue - 1]);


    let total = firstDiceValue + secondDiceValue;
    console.log(total);

    if(firstDiceValue==1 && secondDiceValue==1)
    {
        
        currentPlayer.Total = 0;
        nextPlayer();
        checkWinner();
    }
    else if(firstDiceValue == secondDiceValue)
    {
        currentPlayer.Total = currentPlayer.Total + total;
        checkWinner();
    }
    else
    {
        currentPlayer.Total = currentPlayer.Total + total;
        nextPlayer();
        checkWinner();
        
    }

}

function nextPlayer(){
    if(currentPlayer.Name == "Player1")
    {
        scorePlayer1.innerHTML = "Score: "+currentPlayer.Total;
        currentPlayer = Player2;
        
    }
    else
    {
        scorePlayer2.innerHTML = "Score: "+currentPlayer.Total;
        currentPlayer = Player1;
        
    }
}

function checkWinner()
{
    if(Player1.Total >= 100)
    {
        alert("Player 1 Wins");
    }

    if(Player2.Total >= 100)
    {
        alert("Player 2 Wins");
    }
}