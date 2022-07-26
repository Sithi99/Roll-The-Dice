let images = ["dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"]
    let dice = document.querySelectorAll("img");



function rollDice()
{
    /*dice.forEach(function(die){
        die.classList.add("shake")
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });*/

    let firstDiceValue = Math.floor(Math.random()*6 + 1);
    let SecondDiceValue = Math.floor(Math.random()*6 + 1);

    //console.log(firstDiceValue,SecondDiceValue);

    document.querySelector("#dice-1").setAttribute("src",images[firstDiceValue - 1]);
    document.querySelector("#dice-2").setAttribute("src",images[SecondDiceValue - 1]);

    let total = firstDiceValue+SecondDiceValue;
    console.log(total);


    /*},
    1000
    );*/
}