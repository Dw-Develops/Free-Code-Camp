var count = 5;
var x = document.getElementById("sound"); 
var y = document.getElementById("sound1"); 
var breakTime= 5;

//document.getElementById("startBreak").style.visibility = "hidden"; 
document.getElementById("controls2").style.visibility = "hidden"; 
document.getElementById("display1").style.visibility = "hidden";  

function reset() {
  count = 5;
  breakTime = 5;
  document.getElementById("display").innerHTML= count;
  document.getElementById("display1").innerHTML= breakTime;
  document.getElementById("display").style.visibility = "visible"; 
  document.getElementById("timeType").innerHTML= "Session Time";
}

function addOne() {
  if(count < 59) {
  count = count +1;
   document.getElementById("display").innerHTML= count;
}}
  
  
function subtractOne() {
  if(count > 1){
  count = count -1;
   document.getElementById("display").innerHTML= count;
}}


function startTimer() {
  document.getElementById("timeType").innerHTML= "Session Time";
  
  document.getElementById("controls").style.visibility = "hidden"; 
  document.getElementById("display1").style.visibility = "hidden"; 
  var counter = setInterval(timer, 1000);
count = count *60;
  function timer() {
    count = count -1;
   if(count ===0){
     clearInterval(counter);
     y.play();
     
  document.getElementById("controls2").style.visibility = "visible";  document.getElementById("display1").style.visibility = "visible";    document.getElementById("display").style.visibility = "hidden"; 
     
     document.getElementById("timeType").innerHTML= "Break Time";
  document.getElementById("display1").innerHTML= breakTime;
     //runBreakTimer();
   }
    if(count%60 >= 10) {
      document.getElementById("display").innerHTML= Math.floor(count / 60) + ":" + count % 60;
    }else {
     document.getElementById("display").innerHTML= Math.floor(count / 60) + ":" + "0" + count % 60; 
      
    }
  
  }}


function addOneBr() {
  breakTime = breakTime +1;
  document.getElementById("display1").innerHTML= breakTime;
}
function subtractOneBr() {
  breakTime = breakTime - 1;
  document.getElementById("display1").innerHTML= breakTime;
}


  
function runBreakTimer() {
    document.getElementById("timeType").innerHTML= "Break Time";
  document.getElementById("display1").innerHTML= breakTime;
  document.getElementById("controls2").style.visibility = "hidden"; 
  var startBreak= setInterval(breakTimer, 1000);
breakTime = breakTime * 60;

function breakTimer() {
   
  breakTime = breakTime -1;
  document.getElementById("display1").innerHTML= breakTime;
  
  if(breakTime === 0){
    clearInterval(startBreak);
  
 y.play();
    document.getElementById("timeType").innerHTML= "Reset Pomodoro Timer!";
    document.getElementById("display1").innerHTML= breakTime;
    document.getElementById("controls").style.visibility = "visible"; 
   document.getElementById("display").style.visibility = "visible";  
    
   
   document.getElementById("display1").style.visibility = "hidden";  
  }
  
  if(breakTime%60 >= 10) {
      document.getElementById("display1").innerHTML= Math.floor(breakTime / 60) + ":" + breakTime % 60;
    }else {
      
       document.getElementById("display1").innerHTML= Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60;
    }
  
}}