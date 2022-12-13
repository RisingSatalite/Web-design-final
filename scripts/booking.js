/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let monday = "none";
let tuesday = "none";
let wednesday = "none";
let thursday = "none";
let friday = "none";

let dailyRate = 20;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColorMon() {
    let color = document.getElementById("monday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("monday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("monday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
function changeColorMon() {
    let color = document.getElementById("monday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("monday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("monday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
function changeColorTus() {
    let color = document.getElementById("tuesday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("tuesday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("tuesday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
function changeColorWed() {
    let color = document.getElementById("wednesday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("wednesday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("wednesday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
function changeColorThu() {
    let color = document.getElementById("thursday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("thursday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("thursday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
function changeColorFri() {
    let color = document.getElementById("friday").style.backgroundColor;
    if (color == "e1da01") {
        document.getElementById("friday").style.backgroundColor = "#white";
    }
    else {
        document.getElementById("friday").style.backgroundColor = "#e1da01";
    }
    recalculate();
}
document.getElementById("monday").addEventListener('click',changeColorMon());
document.getElementById("tuesday").addEventListener('click',changeColorTus());
document.getElementById("wednesday").addEventListener('click',changeColorWed());
document.getElementById("thursday").addEventListener('click',changeColorThu());
document.getElementById("friday").addEventListener('click',changeColorFri());
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");

function clearAll() {
    friday = "none";
    thursday = "none";
    wednesday = "none";
    tuesday = "none";
    monday = "none";
    recalculate();
}

clearButton.onclick() = clearAll();

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay() {
    dailyRate = 20;
    recalculate();
}

let halfButton = document.getElementById("half");
halfButton.onclick() = halfDay();
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay() {
    dailyRate = 35;
    recalculate();
}
let fullButton = document.getElementById("full");
fullButton.onclick() = fullDay();
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    let numOfDays = 0;
    //check if each day is selected
    if (monday != "none") {
        numOfDays += 1;
    }
    if (tuesday != "none") {
        numOfDays += 1;
    }
    if (wednesday != "none") {
        numOfDays += 1;
    }
    if (thursday != "none") {
        numOfDays += 1;
    }
    if (friday != "none") {
        numOfDays += 1;
    }
    //dailyRate * numOfDays
}
