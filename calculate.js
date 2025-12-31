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

const btn = document.querySelector(".buttons");


vars = {
    var1: '',
    var2: '',
    result: ''
};

mode = {
    var1: true,
    add: false,
    subtract: false,
    multiply: false,
    divide: false,
}

function VariableSwitch() {
    if (mode.var1 = true){
        mode.var1 = false;
    } else{
        mode.var1 = true;
    }
    //create a way to know when to add to variable1 or variable2
    //keep some counter or switch modes like in C++ with enum

    //maybe make an object with 1 item and check if its true or false for variable1 or variable2
    //i have created a mode object or we could add an item inside the var1 object so that we know when to switch
}

btn.addEventListener("click", (event) => {

    let target = event.target;


    switch (target.id) {
        case 'zero':
            if (mode.var1 == true){
                vars.var1 += '0';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '0';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'one':
            if (mode.var1 == true){
                vars.var1 += '1';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '1';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'two':
            if (mode.var1 == true){
                vars.var1 += '2';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '2';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'three':
            if (mode.var1 == true){
                vars.var1 += '3';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '3';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'four':
            if (mode.var1 == true){
                vars.var1 += '4';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '4';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'five':
            if (mode.var1 == true){
                vars.var1 += '5';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '5';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'six':
            if (mode.var1 == true){
                vars.var1 += '6';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '6';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'seven':
            if (mode.var1 == true){
                vars.var1 += '7';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '7';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'eight':
            if (mode.var1 == true){
                vars.var1 += '8';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '8';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'nine':
            if (mode.var1 == true){
                vars.var1 += '9';
                
                variable1.innerHTML = vars.var1;
            }else{
                vars.var2 += '9';
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'clear':
            vars.var1 = ''
            vars.var2 = ''
            vars.result = ''
            variable1.innerHTML = '';
            mode.var1 = true;
            break;
        case 'deletion':
            if (mode.var1 = true){
                vars.var1 = vars.var1.slice(0, -1);
                variable1.innerHTML = vars.var1;

            }else{
                vars.var2 = vars.var2.slice(0, -1);
                variable1.innerHTML = vars.var2;
            }
            break;
        case 'division':
            if (mode.var1 == false){
                result = vars.var1;
                result = Number(result) / Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                //vars.var2 = '';
            }else{
                mode.var1 = false;
            }
            break;
        case 'multiplication':
            if (mode.var1 == false){
                result = vars.var1;
                result = Number(result) * Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                //vars.var2 = '';
            }else{
                mode.var1 = false;
            }
            break;
        case 'subtraction':
            if (mode.var1 == false){
                result = vars.var1;
                result = Number(result) - Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                //vars.var2 = '';
            }else{
                mode.var1 = false;
            }
            break;
        case 'addition':
            if (mode.var1 == false){
                result = vars.var1;
                result = Number(result) + Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                //vars.var2 = '';
            }else{
                mode.var1 = false;
            }
            break;
        case 'equal':
            if (mode.add == true){
                result = vars.var1;
                result = Number(result) + Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
            } else if(mode.subtract == true){
                result = vars.var1;
                result = Number(result) - Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
            } else if (mode.multiply == true){
                result = vars.var1;
                result = Number(result) * Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
            } else if(mode.divide == true){
                result = vars.var1;
                result = Number(result) / Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
            }
            break;
    }
})