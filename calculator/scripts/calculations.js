let runningTotal = 0;
let buffer = "0";
let previousOperator;
console.log(previousOperator);
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
console.log(parseInt('+'));

function handleSymbol(value) {
    switch(value) {
        case "C":
            buffer = '0';
            break;
        case "<-":
            console.log("Enters backspace");
            if(buffer.length === 1 ){
                buffer = '0';
                console.log(buffer);
            }
            else {
                buffer = buffer.slice(0, -1);
            }
            break;
        case "+":
            if(previousOperator === undefined){
                runningTotal = buffer;
                buffer = 0;
                previousOperator = '+';
            }
            else {
                console.log(parseInt(previousOperator)); 
            }
            break;
        default:
          // code block
        console.log("Will rerender"); 
      }
      console.log("Rerenders");
      rerender();
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
