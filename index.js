/* _creating 'var' for random numbe 1; */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll(".container img")[0];

image1.setAttribute("src", randomImageSource);


/* _creating 'var' for random numbe 2; */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".container img")[1].setAttribute("src", randomImageSource2);


/* _deciding the winner; */
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector(".container h1").textContent = "Draw!";
}