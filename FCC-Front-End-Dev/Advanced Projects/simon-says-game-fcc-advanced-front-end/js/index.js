var x = document.getElementById("sound1"); 
var y = document.getElementById("sound2"); 
var z = document.getElementById("sound3"); 
var w = document.getElementById("sound4");
var u = document.getElementById("sound5");
var v = document.getElementById("sound6");
var r;

var turns;
var rounds;
var maxRounds = 5;

var pcPlay;
var pcPlays;
var playerTurn= false;
var pcTurn= false;
var plays = [1, 2, 3, 4];
var gameSequence = [[3], [3, 4], [3, 4, 2], [3, 4, 2, 4], [3, 4, 2, 4, 1]];

var userSequence = [];
var pcSequence = [];






function startGame() {
 console.log("Starting........")
  pcPlays = true;
  pcTurn = true;
  //playerTurn = false;
  rounds= 1;
 turns = 1;
   userSequence = [];
   pcSequence = [];
  //var pcPlay = Math.floor(Math.random() *4 +1); 
 
  //console.log("pcPlay = " + pcPlay);
  console.log(gameSequence);
      compTurn();
}


  
  
 function red() {
  x.play();
  document.getElementById("red").style.visibility = "hidden";  

   setTimeout(redOn, 500);

}
    
function redOn() {
  document.getElementById("red").style.visibility = "visible"; 
  
inRounds();
}
  
    
function yellow() {
  y.play();
  document.getElementById("yellow").style.visibility = "hidden";  

   setTimeout(yellowOn, 500);

}
      
    
function yellowOn() {
  document.getElementById("yellow").style.visibility = "visible"; 
 inRounds();
}
  
    
function green() {
  w.play();
  document.getElementById("green").style.visibility = "hidden";  

   setTimeout(greenOn, 500);

}
      
    
function greenOn() {
  document.getElementById("green").style.visibility = "visible"; 
 inRounds();
}
  

    

function blue() {
  z.play();
  document.getElementById("blue").style.visibility = "hidden";  

   setTimeout(blueOn, 500);

}
      
    
function blueOn() {
  document.getElementById("blue").style.visibility = "visible"; 
 inRounds();
  
}
 
  
  function inRounds() {
    if(rounds > 5) {
      rounds = rounds +1;
      document.getElementById("counter").value= rounds;
      compTurn();
    } else {
      console.log("Game Over!");
      playerturn = true;
      userTurn();
    }
    
  }



function compTurn() {
  if(pcTurn === true) {
  console.log("Simon goes first.......");
   
    let a = Math.floor(Math.random() *4 +1);
    console.log(a);
    if(a === 1){
      red();
    } else if(a === 2) {
      green();
    } else if(a === 3) {
      yellow();
    } else if(a === 4) {
      blue();
    }
    
  } else {
    
    userTurn();
  }
}
  



function userTurn(pad) {
 console.log("User goes next.........")
  var x = pad.id;
  var cNum;
  if(playerTurn === true) {
 if(x === "red") {
   cNum = 1;
   userSequence.push(y);
    red();
 } else if(x === "green") {
   cNum = 2;
   userSequence.push(y);
   green();
 } else if(x === "yellow"){
   cNum = 3;
   userSequence.push(y);
   yellow();
 } else if(x === "blue") {
    cNum = 4;
   userSequence.push(y);
   blue();
 }
    turns = turns -1;
    console.log(userSequence);
    setTimeout(userTurn, 1000);
  }
  playerTurn = false;
  console.log("Comp Turn = True")
    pcTurn = true;
  turns = rounds;
    inRounds();
  } 
  






function checkAccuracy() {
  if (rounds => 5) {
  console.log ("Checking Accuracy..................");
  rounds = rounds +1;
  //turns = rounds;
  setTimeout(compTurn, 1800);
  } 
    
  
  
   else {
    
    y.play();
     endGame();
  }
}

function endGame() {
  playerTurn = false;
  pcTurn = false;
  console.log("Game Over!");
}