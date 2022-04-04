
//dice on left
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//dice on right, also code combined for less lines of code
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").textContent = "🚩 Player 1 Wins!";
}

//if player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").textContent = "Player 2 Wins! 🚩";
    
}
//tie
else {
    document.querySelector("h2").textContent = "Draw!"
}

// var diceRollButton = document.createElement("button").innerHTML = "Roll Dice 🎲";
// diceRollButton.prepend("h2");