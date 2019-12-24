var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomNumber2 = Math.floor((Math.random()*6)) + 1;
var diceImages = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

//alert("images/"+diceImages[randomNumber1-1]);

document.querySelector("img.img1").setAttribute("src","images/"+diceImages[randomNumber1-1]);
document.querySelector("img.img2").setAttribute("src","images/"+diceImages[randomNumber2-1]);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent="Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent="Player 2 Wins";
}
else {
  document.querySelector("h1").textContent="Tie";
}

function dorkNine() {
   alert("phil suxarino");
}
