
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var running = true;
var clickCounter = 0;
var interval;

function change() {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    document.getElementById("number").innerHTML =
        numbers[randomIndex];
}

function startChanging() {
    interval = setInterval(change, 100);
    document.getElementById("status").innerHTML =
        "Number is changing...";
    document.getElementById("status").style.color = "green";
    document.getElementById("toggleBtn").innerHTML =
        "Stop Changing";
}

function stopChanging() {
    clearInterval(interval);
    document.getElementById("status").innerHTML =
        "Number has stopped!";
    document.getElementById("status").style.color = "red";
    document.getElementById("toggleBtn").innerHTML =
        "Start Changing";
}

function toggleNumber() {
    clickCounter++;

    document.getElementById("clickCount").innerHTML =
        clickCounter;

    if (running == true) {
        stopChanging();
        running = false;
    } else {
        startChanging();
        running = true;
    }
}

window.onload = function () {
    startChanging();
};
