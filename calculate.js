const btn = document.querySelector(".buttons");
const display = document.querySelector("#display")

const calculator = {
    a: '',
    b: '',
    operation: null,
    operated: false,
    result: '0',
}

function addition() {
    return Number(calculator.a) + Number(calculator.b);
}

function subtraction() {
    return Number(calculator.a) - Number(calculator.b);
}

function multiplication() {
    return Number(calculator.a) * Number(calculator.b);
}

function division() {
    return Number(calculator.a) / Number(calculator.b);
}


function calculate(event) {

    console.log(event);

    switch(event.target.id){
        case 'Numpad0':
        case 'Digit0':
        case 'zero':
            if (display.textContent === '0'){
                break;
            }else if (calculator.operation === null){
                calculator.a += '0';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '0';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad1':
        case 'Digit1':
        case 'one':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '1';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '1';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '1';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '1';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad2':
        case 'Digit2':
        case 'two':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '2';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '2';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '2';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '2';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad3':
        case 'Digit3':
        case 'three':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '3';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '3';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '3';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '3';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad4':
        case 'Digit4':
        case 'four':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '4';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '4';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '4';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '4';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad5':
        case 'Digit5':
        case 'five':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '5';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '5';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '5';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '5';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad6':
        case 'Digit6':
        case 'six':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '6';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '6';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '6';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '6';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad7':
        case 'Digit7':
        case 'seven':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '7';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '7';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '7';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '7';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad8':
        case 'Digit8':
        case 'eight':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '8';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '8';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '8';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '8';
                display.textContent = calculator.b;
            }
            break;
        case 'Numpad9':
        case 'Digit9':
        case 'nine':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '9';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '9';
                display.textContent = calculator.a;
            }else if (calculator.operated === true){
                calculator.a = '9';
                calculator.b = '';
                calculator.result = '0';
                display.textContent = '0';
                calculator.operation = null;
                calculator.operated = false;
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '9';
                display.textContent = calculator.b;
            }
            break;
        case 'NumpadAdd':
        case 'Plus':
        case 'addition':
            if (calculator.operation !== '+' && calculator.operation !== null){
                calculator.a = calculator.result;
                calculator.b = '';
            }
            calculator.operation = '+';
            break;
        case 'NumpadSubtract':
        case 'Minus':
        case 'subtraction':
            if (calculator.operation !== '-' && calculator.operation !== null){
                calculator.a = calculator.result;
                calculator.b = '';
            }
            calculator.operation = '-';
            break;
        case 'NumpadMultiply':
        case '*':
        case 'multiplication':
            if (calculator.operation !== '*' && calculator.operation !== null){
                calculator.a = calculator.result;
                calculator.b = '';
            }
            calculator.operation = '*';
            break;
        case 'NumpadDivide':
        case 'Slash':
        case 'division':
            if (calculator.operation !== '/' && calculator.operation !== null){
                calculator.a = calculator.result;
                calculator.b = '';
            }
            calculator.operation = '/';
            break;
        case 'equal':
        case 'Equal':
            if(calculator.operation === '+'){
                if (calculator.operated === true){
                    calculator.result = Number(calculator.result) + Number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = addition();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '-'){
                if (calculator.operated === true){
                    calculator.result = Number(calculator.result) - Number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = subtraction();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '*'){
                if (calculator.operated === true){
                    calculator.result = Number(calculator.result) * Number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = multiplication();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '/'){
                if (calculator.operated === true){
                    calculator.result = Number(calculator.result) / Number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = division();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }
            break;
        case 'NumpadDecimal':
        case 'Period':
        case 'comma':
            console.log(calculator.a, calculator.b, calculator.result)
            console.log((calculator.b).toString())
            if (calculator.operation === null){
                if (display.textContent === '0'){
                    calculator.a = '0.';
                    display.textContent = calculator.a;
                }else if(calculator.a.indexOf('.') != -1){
                    break;
                }else{
                    calculator.a += '.';
                    display.textContent = calculator.a;
                }
            }else{
                if (calculator.b === '0' || calculator.b === ''){
                    calculator.b = '0.';
                    display.textContent = calculator.b;
                }else if((calculator.b).toString().indexOf('.') != -1){
                    break;
                }else if(calculator.operated === true){
                    calculator.a = '0.';
                    calculator.b = '';
                    calculator.result = '0';
                    display.textContent = '0';
                    calculator.operation = null;
                    calculator.operated = false;
                    display.textContent = calculator.a;
                    break;
                }else{
                    calculator.b += '.'
                    display.textContent = calculator.b;
                }
            }
            break;
        case 'clear':
            calculator.a = '';
            calculator.b = '';
            calculator.result = '0';
            display.textContent = '0';
            calculator.operation = null;
            calculator.operated = false;
            break;
        case 'Backspace':
        case 'deletion':
            if (display.textContent === '0'){
                break;
            }else if(calculator.operation === null){
                calculator.a = calculator.a.slice(0, -1);
                display.textContent = calculator.a;
            }else {
                calculator.b = calculator.b.slice(0, -1);
                display.textContent = calculator.b;
            }
            break;
    }
}

btn.addEventListener("click", (event) => {
    calculate(event);
})

function logKey(e){
    calculate({ target: { id: e.code } });
}

document.addEventListener("keypress", logKey);