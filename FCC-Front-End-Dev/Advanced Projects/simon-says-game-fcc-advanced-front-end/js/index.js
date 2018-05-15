var x = document.getElementById("sound1"); 
var y = document.getElementById("sound2"); 
var z = document.getElementById("sound3"); 
var w = document.getElementById("sound4");
var u = document.getElementById("sound5");
var v = document.getElementById("sound6");

var turns;
var rounds;
var maxRounds;
var playerTurn= false;
var pcTurn;
var plays = [1, 2, 3, 4];

var userSequence = [];
var pcSequence = [];

function red() {
  x.play();
  document.getElementById("red").style.visibility = "hidden";  

   setTimeout(redOn, 500);

}
function redOn() {
  document.getElementById("red").style.visibility = "visible"; 

   turn();
}

function yellow() {
  y.play();
  document.getElementById("yellow").style.visibility = "hidden";  

   setTimeout(yellowOn, 500);

}
function yellowOn() {
  document.getElementById("yellow").style.visibility = "visible"; 
  turn();
}

function green() {
  w.play();
  document.getElementById("green").style.visibility = "hidden";  

   setTimeout(greenOn, 500);

}
function greenOn() {
  document.getElementById("green").style.visibility = "visible"; 
 turn();
}


function blue() {
  z.play();
  document.getElementById("blue").style.visibility = "hidden";  

   setTimeout(blueOn, 500);

}
function blueOn() {
  document.getElementById("blue").style.visibility = "visible"; 
  turn();
}


function startGame() {
  pcTurn = true;
 console.log(pcTurn);
  rounds= 0;
  maxRounds = 5;
   userSequence = [];
   pcSequence = [1, 3, 3, 4, 2, 1];
  
  var a = Math.floor(Math.random() *4 +1);
    pcSequence.push(a);
  
  setTimeout(red, 100);
  setTimeout(green, 1100);
  setTimeout(yellow, 2100);
  setTimeout(blue, 3200);
  setTimeout(compTurn, 6200);
  
}



function compTurn() {
  
  console.log(pcSequence);
   if(pcTurn === true) {
     
     document.getElementById('rounds').innerHTML= rounds;
 var a = Math.floor(Math.random() *4 +1); 
    //console.log(a);
    if(a === 1) {
      
      setTimeout(red, 500);
      //red();
    } else if(a === 2) {
      
      setTimeout(green, 500);
      //green();
    } else if(a === 3) {
       
      setTimeout(yellow, 500);
      //yellow();
    } else if(a === 4) {
    
      setTimeout(blue, 500);
      //blue();
    }
      pcSequence.push(a);
      a = "";
  console.log("pcSequence: " + pcSequence);
 
    pcTurn = false;
     playerTurn = true;
    
  console.log('playerTurn' + playerTurn);
  console.log('pcTurn' + pcTurn);
}
}



function userTurn(pad) {
  var b = pad.id;
 rounds = rounds +1;
  if(playerTurn === true) {
 if(b === "red") {
   b = 1;
   userSequence.push(b);
    red();
 } else if(b === "green") {
   b = 2;
   userSequence.push(b);
   green();
 } else if(b === "yellow"){
   b = 3;
   userSequence.push(b);
   yellow();
 } else if(b === "blue") {
   b = 4;
   userSequence.push(b);
   blue();
 }
    
    console.log('userSequence: ' + userSequence);
    
  } 
  setTimeout(checkAccuracy, 500);
}

function checkAccuracy() {
  console.log('working');
  if(userSequence[0] === pcSequence[0]) {
    console.log('Its a match!');
  }
  pcTurn = true;
  playerTurn = false;
  console.log('pcTurn: ' + pcTurn);
  setTimeout(compTurn, 500);
}

function reset() {
  rounds= 0;
  document.getElementById('rounds').innerHTML= rounds;
  
  
}