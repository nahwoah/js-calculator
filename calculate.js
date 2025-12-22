const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const division = document.querySelector("#division");
const multipplication = document.querySelector("#multipplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const deletion = document.querySelector("#deletion");
const variable1 = document.querySelector("#variable1")

const btn = document.querySelector(".button");


var1 = {
    variable1:"0",
    variable2:"0",
    result:"0"
};


btn.addEventListener("click", (event) => {

    let target = event.target;

    function addVariableSwitch(){
        //create a way to know when to add to variable1 or variable2
        //keep some counter or switch modes like in C++
    }

    switch(target.id){
        case 'zero':
            var1.variable1 
            break;
        case 'one':
            break;
        case 'two':
            break;
        case 'three':
            break;
        case 'four':
            break;
        case 'five':
            break;
        case 'six':
            break;
        case 'seven':
            break;
        case 'eight':
            break;
        case 'nine':
            break;
        case 'clear':
            break;
        case 'delete':
            break;
        case 'division':
            break;
        case 'multiplication':
            break;
        case 'subtraction':
            break;
        case 'addition':
            break;
        case 'equal':
            break;
    }
})