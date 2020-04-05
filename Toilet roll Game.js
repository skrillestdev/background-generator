var body = document.querySelector("body");
var cart = document.querySelector(".shopping");
var pack = document.querySelector(".package");
var floor = document.querySelector(".floor");
var scre = document.querySelector(".score");
var end = document.querySelector(".end");
var score = 0;
var count = 0;
var seconds = 0;
var z = 30;
let x;
let y;
let time;
let stop;
var animations = ["6s fall linear 5s", "9s fall linear 8s", "10s fall linear 6s", "7s fall linear 8s", "5s fall linear 2s", "8s fall linear", "8s fall linear 3s", "5s fall linear 4s", "2s fall linear", "1.5s fall linear", "4s fall 1s", "10s fall linear", "1.5s fall linear 2s", "1.5s fall linear 1s", "20s fall linear", "2s fall linear", "6s fall linear", "8s fall", "10s fall linear"];
var animations2 = ["1s fall linear", "5s fall linear", "10s fall linear", "15s fall linear 4s"];
var papers = [".paper1", ".paper2", ".paper3", ".paper4", ".paper5", ".paper6", ".paper7", ".paper8", ".paper9", ".paper10", ".paper11", ".paper12", ".paper13", ".paper14", ".paper15", ".paper16", ".paper17", ".paper18", ".paper19"];
//Mouse Moving Function
fall();
go();
window.addEventListener("mousemove", function(e){
  scre.innerText = "Toilet paper rolls collected " + score;
  var x = e.clientX;
  if(x > 1378){
    x = 1378;
  cart.style.left = x + "px";
  }else{
  cart.style.left = x + "px";
  }
});
//Overlappng Function and score counter
function overlap(){ 
  if(count === 0){
    console.log("Ok");
    clearInterval(x);
    fall();
  }
  var fRect = floor.getBoundingClientRect();
  var cRect = cart.getBoundingClientRect();
  for(var i = 0; i < papers.length; i++){
  var p = document.querySelector(papers[i]);
  var pRect = p.getBoundingClientRect();
  var pcOffset = cRect.top - pRect.top;
	var pcOffset2 = cRect.left - pRect.left;
  var pfOffset = pRect.top - fRect.top;
    if(pcOffset >= 0 && pcOffset <= 100){
    if(pcOffset2 >= -100 && pcOffset2 <= 100){
    p.style.display = "none";
    score += 1; 
    count--;
    }
  }
  else if(pfOffset >= -200 && pfOffset <= -1){
    p.style.display = "none";
    count--;
  }
  }
}

//Falling Function
function fall(){
for(var i = 0; i < papers.length; i++){
  var num  = Math.floor(Math.random() * 1350);
  document.querySelector(papers[i]).style.display = "flex";
    document.querySelector(papers[i]).style.left = num + "px";
    document.querySelector(papers[i]).style.animation = animations[i];
    count++;
  }
  if(count === 19){
    x = setInterval(function(){
      overlap();
    }, 100);
  }
}
function go(){
  time = setInterval(function(){timer();}, 1000);
}
function timer(){
  z--;
  var text = document.querySelector(".tleft");
  text.innerText ="Seconds left " + z;
  if (z <= 5){
    text.style = "color: red";
  }
  if(z === 0){
    text.InnerText = "Time is Up!";
    finish();
    clearInterval(time);
  }
}
function finish(){
  document.querySelector(".cont").style.display = "none";
  var ran = Math.floor(Math.random() * 2);
  if(ran === 0){
    document.querySelector(".endmsg").innerText = "You collected " + score + " toilet paper rolls! You left everyone else at the supermarket crying because they didn't get any. Well Done.";
  }else{
    document.querySelector(".endmsg").innerText = "You let everyone at the supermarket steal your toilet paper... Shame on you.";
  }
  document.querySelector(".end").style =  "top: 0";
  document.querySelector("body").style =  "cursor: default";
}
function newg(){
  document.querySelector(".end").style =  "top: -50em";
  document.querySelector(".cont").style.display = "flex";
  document.querySelector(".endmsg").innerText = "";
  document.querySelector(".tleft").style.color = "black";
  document.querySelector("body").style = "cursor: none";
  z = 30;
  document.querySelector(".tleft").innerText = "Seconds left " + z;
  score = 0;
  count = 0;
  fall();
  go();
}