let runningTotal = 0;
let buffer = "0";
let previousOperator;

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    buttonClick(event.target.value);
})

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}
