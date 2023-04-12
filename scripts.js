/*** DOM BASICS ***/

/*
    Here are a couple basic exercises on the same page to give you a little practice before proceeding to the A5 prep exercises.
*/

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    /*** STEP 1: CHANGE THE BORDER COLOR ***/

    // TODO: Declare objects to gain access to element properties.
    const box = document.getElementById("box");

    const redButton = document.getElementById("red");
    const yellowButton = document.getElementById("yellow");
    const blueButton = document.getElementById("blue");

    // TODO: Create listeners to change color of border to same hex values as buttons.
    // Note: DOM can't access style sheets, so just hard-code the hex codes here for now.
    redButton.addEventListener('click', () => {
        changeBorderColor("#a7240d");
    });

    yellowButton.addEventListener('click', () => {
        changeBorderColor("#ddac0a");
    });

    blueButton.addEventListener('click', () => {
        changeBorderColor("#0d64b6");
    });

    function changeBorderColor(color) {
        box.style.borderColor = color;
    }


    /*** STEP 2: CHANGE THE BORDER THICKNESS ***/

    // TODO: Declare objects to gain access to element properties.
    const fourButton = document.getElementById("4");
    const eightButton = document.getElementById("8");
    const twelveButton = document.getElementById("12");

    // TODO: Create listeners to change thickness of box border.
    fourButton.addEventListener('click', () => {
        box.style.borderWidth = "4px";
    });

    eightButton.addEventListener('click', () => {
        box.style.borderWidth = "8px";
    });

    twelveButton.addEventListener('click', () => {
        box.style.borderWidth = "12px";
    });


    /*** STEP 3: CHANGE THE BORDER STYLE ***/

    // TODO: Declare objects to gain access to element properties.
    const dottedButton = document.getElementById("dotted");
    const doubleButton = document.getElementById("double");
    const dashedButton = document.getElementById("dashed");

    // TODO: Create listeners to change style of box border.
    dottedButton.addEventListener('click', () => {
        box.style.borderStyle = "dotted";
    });

    doubleButton.addEventListener('click', () => {
        box.style.borderStyle = "double";
    });

    dashedButton.addEventListener('click', () => {
        box.style.borderStyle = "dashed";
    });

}