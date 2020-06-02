// Your code goes here

// Change Color of Navigation to Red when clicked
document.querySelector(".main-navigation").addEventListener("click", changeColorOfHeader);
function changeColorOfHeader() {
    document.querySelector(".main-navigation").style.backgroundColor = "red";
}

// change the text in the second h2 on the page from "Let's Go!" to "Let Me Go!" when you drag the text
let allHTwo = document.querySelectorAll("h2");
allHTwo[1].addEventListener("drag", changeText);
function changeText() {
    allHTwo[1].textContent = "Let Me Go!";
}

// change background color of 3rd h2 to green when mouse wheel is rolled on top of it
allHTwo[2].addEventListener("wheel", changeBackColor);
function changeBackColor() {
    allHTwo[2].style.backgroundColor = "green";
}

// changes the color of 3rd h2 back to white when rolled anywhere else on page
document.querySelector(".main-navigation").addEventListener("wheel", changeColorBack);

function changeColorBack() {
    allHTwo[2].style.backgroundColor = "white";
}

// changes text when you focus on the 1st a link in the navBar. Try pressing tab
let allATags = document.querySelectorAll("a");
allATags[0].addEventListener("focus", changeTextTwo);
function changeTextTwo() {
    allATags[0].textContent = "You found me!";
    event.preventDefault();
}
// changes text when you focus on the 2nd a link in the navBar. Try pressing tab
allATags[1].addEventListener("focus", changeTextThree);
function changeTextThree() {
    allATags[1].textContent = "And Me!";
    event.preventDefault();
}
// changes text when you focus on the 3rd a link in the navBar. Try pressing tab
allATags[2].addEventListener("focus", changeTextFour);
function changeTextFour() {
    allATags[2].textContent = "And Meeee!";
    event.preventDefault();
}
// changes text when you focus on the 4th a link in the navBar. Try pressing tab
allATags[3].addEventListener("focus", changeTextFive);
function changeTextFive() {
    allATags[3].textContent = "AND ME!";
    event.preventDefault();
}

// change color of 4th h2 when double clicked.
allHTwo[3].addEventListener("dblclick", changeBackgroundAndTextColor);
function changeBackgroundAndTextColor() {
    allHTwo[3].style.backgroundColor = "black";
    allHTwo[3].style.color = "white";
    event.stopPropagation();
}
// Changes back color of 4th h2 when double clicking anywhere on the body
document.querySelector("body").addEventListener("dblclick", changeBodyColor);
function changeBodyColor() {
    allHTwo[3].style.backgroundColor = "white";
    allHTwo[3].style.color = "black";
}