/*var increase = 0;
var decrease = 0;
var reset = 0;


var button1 = document.getElementsByClassName("increase");
var button2 = document.getElementsByClassName("decrease");
var button3 = document.getElementsByClassName("reset");

button1.addEventListener("click", increaseMe);

function increaseMe() {
    document.querySelector("h2").innerHTML;
}

function decreaseMe() {
   var low =  decrease--;
    return document.querySelector("h2").innerHTML = low;
    
}

function resetMe() {
    reset = 0;
    return reset;
}*/

var headerH2 = document.querySelector("#value").textContent;
var button1 = document.querySelector(".increase");
var button2 = document.querySelector(".decrease");
var button3 = document.querySelector(".reset");
var increase = 0;


button1.addEventListener("click", increaseMe);
button2.addEventListener("click", decreaseMe);
button3.addEventListener("click", resetMe);

function increaseMe() {
    if (document.querySelector(".increase")){
        increase++;
    }

    document.querySelector("#value").textContent = increase;
    document.querySelector("#value").style.color = "blue";
}

function decreaseMe() {
    if (document.querySelector(".decrease")){
        increase--;
    }

    document.querySelector("#value").textContent = increase;
    document.querySelector("#value").style.color = "red";
}

function resetMe() {
    if (document.querySelector(".increase")){
        increase = 0;
    }

    document.querySelector("#value").textContent = increase;
}




















