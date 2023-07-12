
var random1=Math.floor(Math.random()*6)+1;
var dice1="dice"+random1+".png";
var randomImageSource = "images/" + dice1; //images/dice1.png - images/dice6.png
var image1 = document.querySelector(".img1").setAttribute("src", randomImageSource);


var random2=Math.floor(Math.random()*6)+1;
var dice2="dice"+random2+".png";
var randomImageSource2 = "images/" + dice2; //images/dice1.png - images/dice6.png
var image2 = document.querySelector(".img2").setAttribute("src", randomImageSource2);

if(random1>random2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    document.querySelector("p").innerHTML="Great, Player1";

}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
    document.querySelectorAll("p")[1].innerHTML="Great, Player2";

}
else{
    document.querySelector("h1").innerHTML = "Draw";

}

