let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.value');

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value; 
    } else {
        buffer += value;
    }
}

function handleSymbol(value) {
    // TODO
}

function rerender() {
    screen.innerText = buffer;
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}
  
init();
