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
    operation: false,
}

btn.addEventListener("click", (event) => {

    let target = event.target;



    switch (target.id) {
        case 'zero':
            if (mode.operation == true) {

                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;

            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = '0';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '0';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = '0';
                    variable1.innerHTML = vars.var2;
                } else {
                    vars.var2 += '0';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'one':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '1';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '1';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '1';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'two':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '2';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '2';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '2';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'three':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '3';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '3';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '3';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'four':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '4';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '4';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '4';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'five':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '5';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '5';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '5';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'six':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '6';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '6';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '6';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'seven':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '7';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '7';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '7';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'eight':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '8';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '8';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '8';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;
        case 'nine':
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '9';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }else{
                    vars.var1 += '9';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '9';
                    variable1.innerHTML = vars.var2;
                }
            }
            break;

        case 'comma':
            console.log(vars.var1.indexOf('.'))
            if (mode.operation == true){
                vars.var1 = ''
                vars.var2 = '';
                vars.var1 += '0.';
                variable1.textContent = vars.var1;
                mode.var1 = true
                mode.operation = false;
                
            }else if (mode.var1 == true){
                if (vars.var1 == '' || vars.var1 == '0'){
                    vars.var1 = vars.var1.slice(0, -1);
                    vars.var1 += '0.';
                    variable1.textContent = vars.var1;
                }else if(vars.var1.indexOf('.') != -1){
                    break;
                }else{
                    vars.var1 += '.';
                    variable1.textContent = vars.var1;
                }
            } else{
                if (vars.var2 == '' || vars.var2 == '0'){
                    vars.var2 = vars.var2.slice(0, -1);
                    vars.var2 += '0.';
                    variable1.innerHTML = vars.var2;
                }else{
                    vars.var2 += '.';
                    variable1.innerHTML = vars.var2;
                }
            }

            break;
        case 'clear':
            vars.var1 = ''
            vars.var2 = ''
            vars.result = ''
            variable1.innerHTML = '';
            mode.var1 = true;
            mode.operation = false;
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;
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
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = true;
            break;
        case 'multipplication':
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = false;
            mode.multiply = true;
            mode.divide = false;
            break;
        case 'subtraction':
            mode.var1 = false;
                
            mode.add = false;
            mode.subtract = true;
            mode.multiply = false;
            mode.divide = false;
            break;
        case 'addition':
            mode.var1 = false;
                
            mode.add = true;
            mode.subtract = false;
            mode.multiply = false;
            mode.divide = false;

            break;
        case 'equal':
            if (mode.add == true){
                result = vars.var1;
                result = Number(result) + Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.subtract == true){
                result = vars.var1;
                result = Number(result) - Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if (mode.multiply == true){
                result = vars.var1;
                result = Number(result) * Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            } else if(mode.divide == true){
                result = vars.var1;
                result = Number(result) / Number(vars.var2);
                vars.var1 = result;
                variable1.textContent = result;
                mode.operation = true;
            }
            break;
    }
})