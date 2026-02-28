const btn = document.querySelector(".buttons");
const display = document.querySelector("#variable1")



const calculator = {
    a: '',
    b: '',
    operation: null,
    operated: false,
    result: 0,
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

btn.addEventListener("click", (event) => {

    let target = event.target;

    switch(target.id){
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
        case 'one':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '1';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '1';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '1';
                display.textContent = calculator.b;
            }
            break;
        case 'two':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '2';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '2';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '2';
                display.textContent = calculator.b;
            }
            break;
        case 'three':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '3';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '3';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '3';
                display.textContent = calculator.b;
            }
            break;
        case 'four':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '4';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '4';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '4';
                display.textContent = calculator.b;
            }
            break;
        case 'five':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '5';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '5';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '5';
                display.textContent = calculator.b;
            }
            break;
        case 'six':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '6';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '6';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '6';
                display.textContent = calculator.b;
            }
            break;
        case 'seven':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '7';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '7';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '7';
                display.textContent = calculator.b;
            }
            break;
        case 'eight':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '8';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '8';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '8';
                display.textContent = calculator.b;
            }
            break;
        case 'nine':
            if (display.textContent === '0' && calculator.operation === null){
                calculator.a = '9';
                display.textContent = calculator.a
            }else if (calculator.operation === null){
                calculator.a += '9';
                display.textContent = calculator.a;
            }else if (calculator.operation !== null){
                calculator.b += '9';
                display.textContent = calculator.b;
            }
            break;
        case 'addition':
            calculator.operation = '+';
            break;
        case 'subtraction':
            calculator.operation = '-';
            break;
        case 'multiplication':
            calculator.operation = '*';
            break;
        case 'division':
            calculator.operation = '/';
            break;
        case 'equal':
            if(calculator.operation === '+'){
                if (calculator.operated === true){
                    calculator.result = number(calculator.result) + number(calculator.b);
                    display.textContent = calculator.result;
                    calculator.operated = true;
                    break;
                }
                calculator.result = addition();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '-'){
                if (calculator.operated === true){
                    calculator.result = number(calculator.result) - number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = subtraction();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '*'){
                if (calculator.operated === true){
                    calculator.result = number(calculator.result) * number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = multiplication();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }else if (calculator.operation === '/'){
                if (calculator.operated === true){
                    calculator.result = number(calculator.result) / number(calculator.b);
                    display.textContent = calculator.result;
                    break;
                }
                calculator.result = division();
                display.textContent = calculator.result;
                calculator.operated = true;
                break;
            }
            break;
        case 'comma':
            break;
        case 'clear':
            calculator.a = '';
            calculator.b = '';
            calculator.result = '0';
            display.textContent = '0';
            calculator.operation = null;
            calculator.operated = false;
            break;
        case 'deletion':
            if(calculator.operation === null){
                calculator.a = calculator.a.slice(0, -1);
                display.textContent = calculator.a;
            }else {
                calculator.b = calculator.b.slice(0, -1);
                display.textContent = calculator.b;
            }
            break;
    }

})
