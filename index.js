//1. create an array with all images
let images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
//2. click button to call method reroll()
document.querySelector("#button").onclick = reroll;

//reroll function
function reroll(){
  //3. generate two random numbers between 1 and 6
  var rand1 = Math.floor(Math.random()*6);
  var rand2 = Math.floor(Math.random()*6);
  //4. find elements by id
  var img1 = document.getElementById("image1");
  var img2 = document.getElementById("image2");
  //5. change src
  img1.src = images[rand1];
  img2.src = images[rand2];
  //6. display winner
  if(rand1>rand2){
    document.getElementById("h1").innerHTML = "Player 1 wins!";
  }
  else if(rand2>rand1){
    document.getElementById("h1").innerHTML = "Player 2 wins!";
  }
  else{
    document.getElementById("h1").innerHTML = "Tie!";
  }
  //alert("hello");
}
